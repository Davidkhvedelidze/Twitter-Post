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
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-white/30 bg-[#f6d2ef]/75 backdrop-blur-xl" aria-label="Primary navigation">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:flex-nowrap md:gap-6 md:px-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl font-bold tracking-[0.08em] text-photofest-headline sm:text-2xl"
          >
            Photofest
          </motion.span>
          <nav className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link
                  className="inline-flex items-center rounded-full border border-transparent bg-white/45 px-4 py-2 text-sm font-semibold text-photofest-headline transition-all duration-200 hover:bg-photofest-headline hover:text-white hover:shadow-[0_12px_30px_rgba(26,3,45,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-photofest-headline sm:text-base"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      <motion.section
        aria-labelledby="hero-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        custom={0}
        className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-16 pt-20 md:grid-cols-2 md:px-8 lg:gap-16 lg:pb-24 lg:pt-24"
      >
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-white/80 bg-white/60 px-4 py-1 font-semibold text-photofest-headline"
          >
            ჯადოსნური ფოტო გამოცდილებები
          </motion.span>
          <h1 id="hero-title" className="text-4xl font-bold leading-[1.05] text-photofest-headline sm:text-5xl lg:text-6xl">
            გაიღიმე • გადაიღე • გააზიარე
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[rgba(44,12,66,0.7)]">
            Photofest ქმნის დაუვიწყარ გამოცდილებას ფოტოების, გიფებისა და ვიდეოებით. ჩვენი აპარატები იდეალურად ერწყმის ნებისმიერ
            ივენთს და თქვენს სტუმრებს აძლევს შესაძლებლობას წამებში გაიყოლონ ემოციები.
          </p>
          <div className="mt-9 flex flex-wrap gap-3" aria-label="Call to action">
            {heroHighlights.map((pill, index) => (
              <motion.span
                key={pill}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="rounded-full bg-gradient-to-br from-photofest-headline to-[#3e1560] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(26,3,45,0.25)] sm:text-base"
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-white/80 to-[rgba(226,169,241,0.6)] p-9 shadow-[0_30px_90px_rgba(26,3,45,0.15)]">
            <div className="floating-orb pointer-events-none absolute right-[18%] top-[12%] h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,rgba(180,242,255,0.6))] opacity-90" aria-hidden="true" />
            <div className="absolute inset-[12%] flex items-center justify-center rounded-[26px] border-2 border-white/60 bg-[linear-gradient(145deg,rgba(26,3,45,0.85),rgba(94,21,131,0.75))] p-8 text-center text-2xl font-bold text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] sm:text-3xl">
              ჯადოსნური სარკე · Touch to Start
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="px-6 py-16 md:px-8 lg:py-20" id="devices" aria-labelledby="devices-title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="devices-title"
          className="mb-12 text-center text-3xl font-bold text-photofest-headline sm:text-4xl"
        >
          აპარატები
        </motion.h2>
        <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {devices.map((device, index) => (
            <motion.article
              key={device.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              whileHover={{ translateY: -8 }}
              className="relative rounded-[30px] bg-[linear-gradient(135deg,rgba(226,169,241,0.9),rgba(180,242,255,0.6))] p-[1px] shadow-[0_24px_80px_rgba(26,3,45,0.12)]"
            >
              <div className="flex h-full flex-col gap-5 rounded-[30px] border border-white/60 bg-white/75 p-8 backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center rounded-full bg-[rgba(26,3,45,0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-photofest-headline">
                    Premium
                  </span>
                  <h3 className="text-2xl font-semibold text-photofest-headline">{device.title}</h3>
                  <p className="text-sm font-medium text-[rgba(44,12,66,0.7)]">{device.subtitle}</p>
                </div>
                <ul className="ml-4 list-disc space-y-2 text-[rgba(44,12,66,0.7)]">
                  {device.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-8 lg:py-20" id="events" aria-labelledby="events-title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="events-title"
          className="mb-12 text-center text-3xl font-bold text-photofest-headline sm:text-4xl"
        >
          ღონისძიებები
        </motion.h2>
        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              whileHover={{ translateY: -10 }}
              className="rounded-[26px] border border-white/50 bg-[linear-gradient(160deg,rgba(255,255,255,0.8),rgba(226,169,241,0.45))] p-8 shadow-[0_18px_50px_rgba(26,3,45,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(26,3,45,0.18)]"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-photofest-headline">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-photofest-headline">{event.title}</h3>
              <p className="mt-3 text-[rgba(44,12,66,0.7)]">{event.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-xl border border-transparent bg-white/70 px-5 py-2 font-semibold text-photofest-headline transition duration-200 hover:-translate-y-0.5 hover:bg-photofest-headline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-photofest-headline"
              >
                იხილეთ გალერეა
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-8 lg:py-20" id="contact" aria-labelledby="contact-title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="contact-title"
          className="mb-12 text-center text-3xl font-bold text-photofest-headline sm:text-4xl"
        >
          კონტაქტი
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl rounded-[32px] border border-white/60 bg-[linear-gradient(135deg,rgba(226,169,241,0.95),rgba(180,242,255,0.75))] p-12 text-center shadow-[0_20px_70px_rgba(26,3,45,0.15)]"
        >
          <h3 className="text-3xl font-semibold text-photofest-headline">დაგვიკავშირდით</h3>
          <p className="mt-4 text-lg leading-relaxed text-[rgba(44,12,66,0.7)]">
            დაგეგმეთ თქვენი შემდეგი ღონისძიება Photofest-თან ერთად. გაგიზიარებთ იდეებს, ვიზუალურ კონცეფციას და მოვიფიქრებთ საუკეთესო გამოცდილებას.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-lg font-medium text-photofest-headline">
            <a
              href="mailto:Photofest2@gmail.com"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Photofest2@gmail.com
            </a>
            <a
              href="tel:+995596922299"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              596 922 299
            </a>
            <a
              href="https://www.instagram.com/Photofest_ge"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Photofest_ge
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[rgba(26,3,45,0.9)] px-6 pb-12 pt-10 text-white/85" aria-label="Site footer">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="max-w-md space-y-2">
            <span className="block text-sm font-semibold">© {new Date().getFullYear()} Photofest</span>
            <p className="text-sm text-white/70">
              თანამედროვე ფოტო გამოცდილებები თქვენი ღონისძიებისთვის.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold sm:justify-end">
            <a
              href="#devices"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              აპარატები
            </a>
            <a
              href="#events"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              ღონისძიებები
            </a>
            <a
              href="#contact"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              კონტაქტი
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
