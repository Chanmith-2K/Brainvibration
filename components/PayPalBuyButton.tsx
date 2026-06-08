"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: Record<string, string>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError?: (error: unknown) => void;
      }) => { render: (selector: string | HTMLElement) => void };
    };
  }
}

type PayPalBuyButtonProps = {
  title: string;
  price: string;
  currency: string;
};

export default function PayPalBuyButton({ title, price, currency }: PayPalBuyButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("loading");
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      setStatus("missing-client-id");
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>("script[data-paypal-sdk]");

    const renderButtons = () => {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = "";
      setStatus("ready");

      window.paypal.Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "pay"
        },
        async createOrder() {
          const response = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, price, currency })
          });
          const order = await response.json();
          if (!response.ok || !order.id) throw new Error(order.error || "PayPal order creation failed");
          return order.id;
        },
        async onApprove(data) {
          setStatus("capturing");
          const response = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderId: data.orderID })
          });
          const capture = await response.json();
          if (!response.ok) throw new Error(capture.error || "PayPal payment capture failed");
          setStatus("success");
        },
        onError(error) {
          console.error(error);
          setStatus("error");
        }
      }).render(paypalRef.current);
    };

    if (existingScript) {
      if (window.paypal) renderButtons();
      else existingScript.addEventListener("load", renderButtons, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}&intent=capture`;
    script.async = true;
    script.dataset.paypalSdk = "true";
    script.onload = renderButtons;
    script.onerror = () => setStatus("sdk-error");
    document.body.appendChild(script);
  }, [clientId, currency, price, title]);

  if (!clientId) {
    return (
      <div className="paypalNotice">
        PayPal Client ID is not added yet. Add NEXT_PUBLIC_PAYPAL_CLIENT_ID in Vercel Environment Variables.
      </div>
    );
  }

  return (
    <div className="paypalBox">
      <div ref={paypalRef} />
      {status === "loading" && <p className="muted note">Loading PayPal...</p>}
      {status === "capturing" && <p className="muted note">Confirming your payment...</p>}
      {status === "success" && <p className="successText">Payment successful. Download delivery can be unlocked next.</p>}
      {status === "error" && <p className="errorText">Payment failed. Please try again.</p>}
      {status === "sdk-error" && <p className="errorText">PayPal could not load. Check the Client ID and domain settings.</p>}
    </div>
  );
}
