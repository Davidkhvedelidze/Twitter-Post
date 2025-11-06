import Link from "next/link";

const devices = [
  {
    title: "ჯადოსნური სარკე",
    points: [
      "ფოტოების, გიფების და ბუმერანგების გადაღება",
      "ინდივიდუალური დიზაინი თითოეული ღონისძიებისთვის",
      "ადგილზე ბეჭდვა და ციფრული ვერსიის QR კოდი წამებში",
      "გამორჩეული გამოცდილება ღონისძიებისთვის",
      "იდეალური არჩევანი სელფის მოყვარულთათვის",
    ],
  },
  {
    title: "ფოტოკაბინა",
    points: [
      "ფოტოების, გიფების და ბუმერანგების გადაღება",
      "ფოტოებს ბეჭდავ მომენტალურად და ულიმიტოდ",
      "უნიკალური დიზაინი თითოეულ ღონისძიებაზე",
      "კომპაქტური და დახვეწილი ვიზუალი, რომელიც ერწყმის ნებისმიერ გარემოს",
      "ციფრული ვერსიის QR კოდი",
    ],
  },
  {
    title: "კადრი 360°",
    points: [
      "360 გრადუსიანი slow motion ვიდეოს გადაღება",
      "ინდივიდუალური ბრენდირება",
      "გადაღებულ ვიდეოზე მომენტალური წვდომა",
      "3D ეფექტის პლატფორმა",
    ],
  },
];

const events = ["ივენთი 1", "ივენთი 2", "ივენთი 3"];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar-inner">
          <span className="brand">Photofest</span>
          <nav className="nav-links" aria-label="Primary">
            <Link className="nav-link" href="#devices">
              აპარატები
            </Link>
            <Link className="nav-link" href="#events">
              ღონისძიებები
            </Link>
            <Link className="nav-link" href="#contact">
              კონტაქტი
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">გაიღიმე • გადაიღე • გააზიარე</h1>
          <p className="hero-description">
            Photofest ქმნის დაუვიწყარ გამოცდილებას ფოტოების, გიფებისა და
            ვიდეოებით. ჩვენი აპარატები იდეალურად ერწყმის ნებისმიერ ივენთს და
            თქვენს სტუმრებს აძლევს შესაძლებლობას წამებში გაიყოლონ ემოციები.
          </p>
          <div className="hero-actions" aria-label="Call to action">
            <span className="hero-pill">გაიღიმე</span>
            <span className="hero-pill">გადაიღე</span>
            <span className="hero-pill">გააზიარე</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "360px",
              borderRadius: "32px",
              background:
                "radial-gradient(circle at top left, rgba(226, 169, 241, 0.7), transparent 60%), radial-gradient(circle at bottom right, rgba(26, 3, 45, 0.55), transparent 55%)",
              boxShadow: "0 25px 80px rgba(26, 3, 45, 0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "12%",
                borderRadius: "24px",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1.4rem",
                textAlign: "center",
                padding: "1.5rem",
                lineHeight: 1.4,
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.02))",
                backdropFilter: "blur(4px)",
              }}
            >
              ჯადოსნური სარკე<br />Touch to Start
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="devices" aria-labelledby="devices-title">
        <h2 id="devices-title">აპარატები</h2>
        <div className="cards-grid">
          {devices.map((device) => (
            <article key={device.title} className="card">
              <h3>{device.title}</h3>
              <ul>
                {device.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="events" aria-labelledby="events-title">
        <h2 id="events-title">ღონისძიებები</h2>
        <div className="events-list">
          {events.map((event) => (
            <div key={event} className="events-item">
              {event}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">კონტაქტი</h2>
        <div className="contact-card">
          <h3>დაგვიკავშირდით</h3>
          <div className="contact-info">
            <a href="mailto:Photofest2@gmail.com">Photofest2@gmail.com</a>
            <a href="tel:+995596922299">596 922 299</a>
            <a
              href="https://www.instagram.com/Photofest_ge"
              target="_blank"
              rel="noreferrer"
            >
              Photofest_ge
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Photofest</footer>
    </main>
  );
}
