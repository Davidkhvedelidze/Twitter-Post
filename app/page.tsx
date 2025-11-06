"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const navLinks = [
  { href: "#devices", label: "აპარატები" },
  { href: "#events", label: "ღონისძიებები" },
  { href: "#contact", label: "კონტაქტი" },
];

const heroHighlights = ["გაიღიმე", "გადაიღე", "გააზიარე"];

const devices = [
  {
    title: "ჯადოსნური სარკე",
    subtitle: "ინტერაქტიული self-service გამოცდილება",
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
    subtitle: "ცხოვრებისეული მომენტების stylish ჩარჩო",
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
    subtitle: "საუკუნის ეფექტი თითოეულ სტუმარზე",
    points: [
      "360 გრადუსიანი slow motion ვიდეოს გადაღება",
      "ინდივიდუალური ბრენდირება",
      "გადაღებულ ვიდეოზე მომენტალური წვდომა",
      "3D ეფექტის პლატფორმა",
    ],
  },
];

const events = [
  {
    title: "ივენთი 1",
    date: "მაისი 2024",
    location: "თბილისი",
    description:
      "სადღესასწაულო საღამო, სადაც სტუმრებმა Photofest-ის ჯადოსნური სარკით unforgettable გამოცდილება მიიღეს.",
  },
  {
    title: "ივენთი 2",
    date: "ივნისი 2024",
    location: "ბათუმი",
    description:
      "ბრენდირებული ფოტოკაბინა და ციფრული ბუმერანგები ზღვის ნაპირას, სრულყოფილი summer vibes.",
  },
  {
    title: "ივენთი 3",
    date: "ივლისი 2024",
    location: "ქუთაისი",
    description:
      "360° კადრი სტუმრებისათვის, რომლებიც თავიანთი სტილის გაზიარებას წამებში ახერხებენ.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HomePage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-orb", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <header className="navbar" aria-label="Primary navigation">
        <div className="navbar-inner">
          <motion.span
            className="brand"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Photofest
          </motion.span>
          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link className="nav-link" href={link.href}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      <motion.section
        className="hero"
        aria-labelledby="hero-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        custom={0}
      >
        <div className="hero-content">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            ჯადოსნური ფოტო გამოცდილებები
          </motion.span>
          <h1 id="hero-title">გაიღიმე • გადაიღე • გააზიარე</h1>
          <p className="hero-description">
            Photofest ქმნის დაუვიწყარ გამოცდილებას ფოტოების, გიფებისა და ვიდეოებით.
            ჩვენი აპარატები იდეალურად ერწყმის ნებისმიერ ივენთს და თქვენს სტუმრებს აძლევს
            შესაძლებლობას წამებში გაიყოლონ ემოციები.
          </p>
          <div className="hero-actions" aria-label="Call to action">
            {heroHighlights.map((pill, index) => (
              <motion.span
                key={pill}
                className="hero-pill"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-frame">
            <div className="floating-orb" aria-hidden="true" />
            <div className="hero-screen">ჯადოსნური სარკე · Touch to Start</div>
          </div>
        </motion.div>
      </motion.section>

      <section className="section" id="devices" aria-labelledby="devices-title">
        <motion.h2
          id="devices-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          აპარატები
        </motion.h2>
        <div className="cards-grid">
          {devices.map((device, index) => (
            <motion.article
              key={device.title}
              className="card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              whileHover={{ translateY: -8 }}
            >
              <div className="card-header">
                <span className="card-badge">Premium</span>
                <h3>{device.title}</h3>
                <p className="card-subtitle">{device.subtitle}</p>
              </div>
              <ul>
                {device.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section" id="events" aria-labelledby="events-title">
        <motion.h2
          id="events-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ღონისძიებები
        </motion.h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="event-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              whileHover={{ translateY: -10 }}
            >
              <div className="event-meta">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button type="button" className="event-cta">
                იხილეთ გალერეა
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <motion.h2
          id="contact-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          კონტაქტი
        </motion.h2>
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>დაგვიკავშირდით</h3>
          <p className="contact-description">
            დაგეგმეთ თქვენი შემდეგი ღონისძიება Photofest-თან ერთად. გაგიზიარებთ იდეებს,
            ვიზუალურ კონცეფციას და მოვიფიქრებთ საუკეთესო გამოცდილებას.
          </p>
          <div className="contact-info">
            <a href="mailto:Photofest2@gmail.com">Photofest2@gmail.com</a>
            <a href="tel:+995596922299">596 922 299</a>
            <a href="https://www.instagram.com/Photofest_ge" target="_blank" rel="noreferrer">
              Photofest_ge
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span>© {new Date().getFullYear()} Photofest</span>
            <p>თანამედროვე ფოტო გამოცდილებები თქვენი ღონისძიებისთვის.</p>
          </div>
          <div className="footer-links">
            <a href="#devices">აპარატები</a>
            <a href="#events">ღონისძიებები</a>
            <a href="#contact">კონტაქტი</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
