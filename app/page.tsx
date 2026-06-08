import { articles, ebooks } from "../lib/data";

function LogoMark() {
  return (
    <div className="logoMark" aria-hidden="true">
      <div className="lotus">◬</div>
      <div className="orbit one" />
      <div className="orbit two" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Brain Vibration Home">
          <LogoMark />
          <span>Brain Vibration</span>
        </a>
        <div className="navLinks">
          <a href="#articles">Articles</a>
          <a href="#ebooks">eBooks</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">Mind • Energy • Self Mastery</p>
          <h1>Decode the Mind. Awaken the Inner System.</h1>
          <p className="lead">
            Brain Vibration is a premium knowledge space for spiritual psychology, neuroscience-inspired self-development and deep inner clarity.
          </p>
          <div className="actions">
            <a className="btn primary" href="#ebooks">Explore eBooks</a>
            <a className="btn ghost" href="#articles">Read Articles</a>
          </div>
        </div>
        <div className="heroCard">
          <LogoMark />
          <p>From noise to clarity. From scattered thoughts to awakened direction.</p>
        </div>
      </section>

      <section id="articles" className="section shell">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Knowledge Library</p>
            <h2>Latest Articles</h2>
          </div>
          <a className="textLink" href="#contact">Request a topic →</a>
        </div>
        <div className="grid three">
          {articles.map((article) => (
            <article className="card" key={article.title}>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <small>{article.readTime}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="ebooks" className="section shell split">
        <div>
          <p className="eyebrow">Digital Book Store</p>
          <h2>Premium eBooks</h2>
          <p className="muted">
            Sell your Sinhala and English eBooks globally. PayPal Checkout will be connected through secure Vercel API routes before launch.
          </p>
        </div>
        <div className="ebookList">
          {ebooks.map((book) => (
            <div className="ebook" key={book.title}>
              <div>
                <strong>{book.title}</strong>
                <p>{book.subtitle}</p>
              </div>
              <div className="price">${book.price} {book.currency}</div>
              <button>Buy with PayPal</button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section shell about">
        <p className="eyebrow">About the Creator</p>
        <h2>Built for people who want to understand life deeply.</h2>
        <p>
          Brain Vibration shares simple but deep articles on mind, vibration, Buddhism, Vedanta, emotional discipline, practical spirituality and modern self-development. The goal is to help readers think clearly, live consciously and build a stronger inner system.
        </p>
      </section>

      <section id="contact" className="section shell contact">
        <div>
          <p className="eyebrow">Work With Brain Vibration</p>
          <h2>Contact</h2>
          <p className="muted">Use this form for eBook support, collaborations and article inquiries.</p>
        </div>
        <form>
          <input placeholder="Your name" />
          <input placeholder="Your email" type="email" />
          <textarea placeholder="Your message" rows={5} />
          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}
