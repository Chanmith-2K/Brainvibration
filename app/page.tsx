import { articles, categories, ebooks } from "../lib/data";

function LogoMark() {
  return <div className="logoMark" aria-hidden="true"><div className="lotus">◬</div><div className="orbit one" /><div className="orbit two" /></div>;
}

function Header() {
  return <header className="navWrap"><nav className="nav shell"><a className="brand" href="/" aria-label="Brain Vibration Home"><LogoMark /><span>Brain Vibration</span></a><div className="navLinks"><a href="/articles">Articles</a><a href="/ebooks">eBooks</a><a href="/about">About</a><a href="/contact">Contact</a></div></nav></header>;
}

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: "Brain Vibration", url: "https://brainvibration.vercel.app", description: "A knowledge library and digital book store for spiritual psychology, mind science and self-development.", potentialAction: { "@type": "SearchAction", target: "https://brainvibration.vercel.app/articles?search={search_term_string}", "query-input": "required name=search_term_string" } };
  return (
    <main>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero shell">
        <div className="heroCopy"><p className="eyebrow">Mind • Energy • Self Mastery</p><h1>Decode the Mind. Awaken the Inner System.</h1><p className="lead">Brain Vibration is a clean knowledge space for spiritual psychology, neuroscience-inspired self-development, Buddhism, Vedanta and practical inner clarity.</p><div className="actions"><a className="btn primary" href="/ebooks">Explore eBooks</a><a className="btn ghost" href="/articles">Read Articles</a></div></div>
        <div className="heroVisual"><img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Meditation silhouette in peaceful natural light" /><div className="visualBadge"><LogoMark /><span>From noise to clarity</span></div></div>
      </section>
      <section className="section shell"><div className="sectionHead"><div><p className="eyebrow">Knowledge Library</p><h2>Featured Articles</h2></div><a className="textLink" href="/articles">View all articles →</a></div><div className="grid three">{articles.slice(0, 3).map((article) => <a className="articleCard" href={`/articles/${article.slug}`} key={article.title}><img src={article.image} alt={article.alt} /><div><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><small>{article.readTime}</small></div></a>)}</div></section>
      <section className="section shell categories"><p className="eyebrow">SEO Content Pillars</p><h2>Built around clear topic clusters.</h2><div className="pillGrid">{categories.map((category) => <a href="/articles" key={category}>{category}</a>)}</div></section>
      <section className="section shell split"><div><p className="eyebrow">Digital Book Store</p><h2>Premium eBooks</h2><p className="muted">The eBook section is ready for PayPal Checkout. Payment will be created and captured through secure Vercel API routes, not through exposed secret keys.</p><a className="btn primary compact" href="/ebooks">Open eBook Store</a></div><div className="ebookList">{ebooks.map((book) => <a className="ebook" href={`/ebooks/${book.slug}`} key={book.title}><img src={book.cover} alt={`${book.title} eBook cover preview`} /><div><strong>{book.title}</strong><p>{book.subtitle}</p></div><div className="price">${book.price}</div></a>)}</div></section>
      <section className="section shell aboutPreview"><p className="eyebrow">About the Creator</p><h2>For people who want to understand life deeply.</h2><p>Brain Vibration shares simple but deep articles on mind, vibration, Buddhism, Vedanta, emotional discipline, practical spirituality and modern self-development.</p><a className="textLink" href="/about">Read the story →</a></section>
      <footer className="footer shell"><span>© 2026 Brain Vibration</span><a href="/contact">Contact</a></footer>
    </main>
  );
}
