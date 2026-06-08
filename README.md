# Brain Vibration

Modern minimalist Next.js website for Brain Vibration: articles, eBooks, About section, contact section and PayPal API route skeleton.

## Run locally

```bash
npm install
npm run dev
```

## Vercel deployment

1. Connect this GitHub repository to Vercel.
2. Add Environment Variables:
   - `PAYPAL_MODE=sandbox` first, later change to `live`
   - `PAYPAL_CLIENT_ID=your_paypal_client_id`
   - `PAYPAL_CLIENT_SECRET=your_paypal_secret`
3. Deploy.

Never commit PayPal secrets to GitHub.
