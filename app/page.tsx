import { articles, book, chapters, whatsappLink } from "../lib/data";

function LogoMark() {
  return <div className="logoMark" aria-hidden="true"><div className="lotus">◬</div><div className="orbit one" /><div className="orbit two" /></div>;
}

function Header() {
  return (
    <header className="navWrap">
      <nav className="nav shell">
        <a className="brand" href="/" aria-label="Brain Vibration Home"><LogoMark /><span>Brain Vibration</span></a>
        <div className="navLinks"><a href="#book">Book</a><a href="#chapters">Chapters</a><a href="#articles">Articles</a><a href={whatsappLink}>WhatsApp</a></div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <section className="oldHero shell" id="book">
        <div className="oldHeroCopy">
          <p className="eyebrow">Brain Vibration Digital Book</p>
          <h1>{book.sinhalaTitle}</h1>
          <h2>{book.title}</h2>
          <p className="lead">{book.subtitle}</p>
          <div className="bookInfo"><span>{book.author}</span><span>{book.price}</span><span>PDF eBook</span></div>
          <div className="actions"><a className="btn primary" href={whatsappLink}>Buy on WhatsApp</a><a className="btn ghost" href="#chapters">View Chapters</a></div>
        </div>
        <div className="bookStage">
          <div className="bookCover">
            <img src={book.cover} alt={`${book.title} book cover`} />
            <div className="coverText"><span>Brain Vibration</span><strong>{book.title}</strong><small>{book.author}</small></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="chapters">
        <div className="sectionHead"><div><p className="eyebrow">Book Structure</p><h2>Chapters</h2></div><a className="textLink" href={whatsappLink}>Order via WhatsApp →</a></div>
        <div className="chapterGrid">{chapters.map((chapter) => <article className="chapterCard" key={chapter.no}><span>{chapter.no}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></article>)}</div>
      </section>

      <section className="section shell" id="articles">
        <div className="sectionHead"><div><p className="eyebrow">Knowledge Library</p><h2>Latest Articles</h2></div></div>
        <div className="grid three">{articles.map((article) => <a className="articleCard" href={`/articles/${article.slug}`} key={article.title}><img src={article.image} alt={article.alt} /><div><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><small>{article.readTime}</small></div></a>)}</div>
      </section>

      <section className="section shell aboutPreview">
        <p className="eyebrow">About Brain Vibration</p>
        <h2>Deep Sinhala writing for inner clarity and self-development.</h2>
        <p>Brain Vibration shares spiritual psychology, mind-system ideas and practical reflections in a simple, human way. This page is focused on the book, its chapters and direct WhatsApp ordering.</p>
        <a className="textLink" href={whatsappLink}>Message on WhatsApp →</a>
      </section>
      <footer className="footer shell"><span>© 2026 Brain Vibration</span><a href={whatsappLink}>WhatsApp Order</a></footer>
    </main>
  );
}
