import { Metadata } from "next";
import PayPalBuyButton from "../../../components/PayPalBuyButton";
import { ebooks } from "../../../lib/data";

export function generateStaticParams() {
  return ebooks.map((book) => ({ slug: book.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const book = ebooks.find((item) => item.slug === params.slug);
  return {
    title: book?.title || "eBook",
    description: book?.subtitle || "Brain Vibration eBook"
  };
}

export default function EbookPage({ params }: { params: { slug: string } }) {
  const book = ebooks.find((item) => item.slug === params.slug) || ebooks[0];

  return (
    <main>
      <section className="salesPage shell">
        <a className="backLink" href="/ebooks">← All eBooks</a>
        <img src={book.cover} alt={`${book.title} eBook cover preview`} />
        <div>
          <p className="eyebrow">Brain Vibration eBook</p>
          <h1>{book.title}</h1>
          <p className="lead">{book.subtitle}</p>
          <strong className="bigPrice">${book.price} {book.currency}</strong>
          <PayPalBuyButton title={book.title} price={book.price} currency={book.currency} />
          <p className="muted note">After payment verification, this page can unlock the eBook download or send it to the buyer by email.</p>
        </div>
      </section>
    </main>
  );
}
