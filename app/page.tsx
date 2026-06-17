import { articles, book, chapters, whatsappLink } from "../lib/data";

function LogoMark() {
  return <div className="logoMark" aria-hidden="true"><div className="lotus">◬</div><div className="orbit one" /><div className="orbit two" /></div>;
}

function Header() {
  return (
    <header className="navWrap">
      <nav className="nav shell">
        <a className="brand" href="/" aria-label="Brain Vibration Home"><LogoMark /><span>Brain Vibration</span></a>
        <div className="navLinks"><a href="#book">පොත</a><a href="#chapters">පරිච්ඡේද</a><a href="#articles">ලිපි</a><a href={whatsappLink}>WhatsApp</a></div>
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
          <p className="eyebrow">Brain Vibration ඩිජිටල් පොත</p>
          <h1>{book.title}</h1>
          <h2>{book.englishTitle}</h2>
          <p className="lead">{book.subtitle}</p>
          <div className="bookInfo"><span>{book.author}</span><span>{book.price}</span><span>{book.format}</span></div>
          <div className="actions"><a className="btn primary" href={whatsappLink}>WhatsApp හරහා මිලදී ගන්න</a><a className="btn ghost" href="#chapters">පරිච්ඡේද බලන්න</a></div>
        </div>
        <div className="bookStage">
          <div className="bookCover">
            <img src={book.cover} alt="Brain Vibration book cover" />
            <div className="coverText"><span>Brain Vibration</span><strong>{book.title}</strong><small>{book.author}</small></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="chapters">
        <div className="sectionHead"><div><p className="eyebrow">පොතේ අන්තර්ගතය</p><h2>පරිච්ඡේද 12</h2></div><a className="textLink" href={whatsappLink}>WhatsApp හරහා ඇණවුම් කරන්න →</a></div>
        <div className="chapterGrid">{chapters.map((chapter) => <article className="chapterCard" key={chapter.no}><span>{chapter.no}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></article>)}</div>
      </section>

      <section className="section shell" id="articles">
        <div className="sectionHead"><div><p className="eyebrow">Brain Vibration ලිපි</p><h2>නවතම ලිපි</h2></div></div>
        <div className="grid three">{articles.map((article) => <a className="articleCard" href={`/articles/${article.slug}`} key={article.title}><img src={article.image} alt={article.alt} /><div><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><small>{article.readTime}</small></div></a>)}</div>
      </section>

      <section className="section shell aboutPreview">
        <p className="eyebrow">Brain Vibration ගැන</p>
        <h2>මනස, නිහඬතාවය සහ ස්වයං සංවර්ධනය ගැන ගැඹුරු සිංහල ලිවීමක්.</h2>
        <p>Brain Vibration කියන්නේ මනස, හැඟීම්, අවබෝධය, නිහඬතාවය සහ අභ්‍යන්තර පරිවර්තනය ගැන සරලව කතා කරන දැනුම් අවකාශයක්. මේ පිටුව පොත, පරිච්ඡේද සහ WhatsApp ඇණවුම සඳහා සකස් කරලා තියෙනවා.</p>
        <a className="textLink" href={whatsappLink}>WhatsApp පණිවිඩයක් යවන්න →</a>
      </section>
      <footer className="footer shell"><span>© 2026 Brain Vibration</span><a href={whatsappLink}>WhatsApp Order</a></footer>
    </main>
  );
}
