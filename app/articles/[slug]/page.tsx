import { Metadata } from "next";
import { articles } from "../../../lib/data";
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const article = articles.find((item) => item.slug === params.slug); return { title: article?.title || "Article", description: article?.excerpt || "Brain Vibration article" }; }
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug) || articles[0];
  return <main><article className="articlePage shell"><a className="backLink" href="/articles">← All Articles</a><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="lead">{article.excerpt}</p><img className="wideImage" src={article.image} alt={article.alt} /><div className="contentBody"><p>This is a sample article page. We will replace this with your full Brain Vibration article content, Sinhala or English, using SEO-friendly headings and clean paragraph structure.</p><h2>Why this topic matters</h2><p>Every article should answer one deep question clearly. The writing must be simple, useful and emotionally intelligent, while still carrying enough depth for serious readers.</p><h2>Practical reflection</h2><p>At the end of each article, add a small reflection or exercise. This helps readers save, share and return to the page again.</p></div></article></main>;
}
