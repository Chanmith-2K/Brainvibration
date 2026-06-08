import { Metadata } from "next";
import { articles, categories } from "../../lib/data";
export const metadata: Metadata = { title: "Articles", description: "Read Brain Vibration articles on spiritual psychology, mind science, Buddhism, Vedanta and self-development." };
export default function ArticlesPage() {
  return <main><header className="subHero shell"><a className="backLink" href="/">← Brain Vibration</a><p className="eyebrow">Knowledge Library</p><h1>Articles for inner clarity, focus and awakened living.</h1><p className="lead">SEO-ready article structure with clear categories, strong titles, image cards and readable summaries.</p><div className="pillGrid smallPills">{categories.map((c) => <span key={c}>{c}</span>)}</div></header><section className="section shell"><div className="grid three">{articles.map((article) => <a className="articleCard" href={`/articles/${article.slug}`} key={article.slug}><img src={article.image} alt={article.alt} /><div><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><small>{article.readTime}</small></div></a>)}</div></section></main>;
}
