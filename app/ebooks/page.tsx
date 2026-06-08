import { Metadata } from "next";
import { ebooks } from "../../lib/data";
export const metadata: Metadata = { title: "eBooks", description: "Buy Brain Vibration digital eBooks through PayPal Checkout." };
export default function EbooksPage() {
  return <main><header className="subHero shell"><a className="backLink" href="/">← Brain Vibration</a><p className="eyebrow">Digital Book Store</p><h1>Premium eBooks for self-mastery and spiritual clarity.</h1><p className="lead">This page will connect to PayPal Checkout and unlock digital delivery after verified payment.</p></header><section className="section shell ebookGrid">{ebooks.map((book) => <article className="salesCard" key={book.slug}><img src={book.cover} alt={`${book.title} eBook cover preview`} /><div><p className="eyebrow">Brain Vibration eBook</p><h2>{book.title}</h2><p className="muted">{book.subtitle}</p><strong className="bigPrice">${book.price} {book.currency}</strong><a className="btn primary" href={`/ebooks/${book.slug}`}>View Details</a></div></article>)}</section></main>;
}
