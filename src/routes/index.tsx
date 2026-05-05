import type * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroNails from "@/assets/hero-nails.jpg";
import aboutArtist from "@/assets/paula-portrait.png";
import logo from "@/assets/logo-paula-venc.jpg";
import nailLengths from "@/assets/nagellaenge.png";
import g1 from "@/assets/gallery-1.jpg";
import showcaseVideo from "@/assets/showcase.mp4?url";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const BOOKING_URL = "#booking";

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Paula Venc Nagelstudio" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-xl tracking-wide text-foreground">
            Paula <span className="text-rose">Venc</span>
          </span>
        </a>
        <ul className="hidden items-center gap-10 text-sm font-light text-foreground/80 md:flex">
          <li><a href="#services" className="transition hover:text-rose">Leistungen</a></li>
          <li><a href="#gallery" className="transition hover:text-rose">Galerie</a></li>
          <li><a href="#about" className="transition hover:text-rose">Über mich</a></li>
          <li><a href="#booking" className="transition hover:text-rose">Termin</a></li>
        </ul>
        <a
          href={BOOKING_URL}
          className="hidden rounded-full bg-rose px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-soft transition hover:bg-rose-deep md:inline-block"
        >
          Buchen
        </a>
      </nav>
    </header>
  );
}

function CtaButton({ children = "Jetzt Termin sichern", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      className={
        "inline-block rounded-full bg-rose px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-soft transition hover:bg-rose-deep hover:shadow-elegant " +
        className
      }
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-background"
    >
      <img
        src={heroNails}
        alt="Natürliche Gelnägel in Nude-Tönen – Paula Venc Wien 1010"
        className="absolute inset-0 -z-20 h-full w-full object-cover hero-zoom"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, white 55%, transparent) 0%, color-mix(in oklab, white 35%, transparent) 45%, color-mix(in oklab, var(--nude) 45%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, black 18%, transparent) 100%)",
        }}
      />
      <div className="mx-auto w-full max-w-3xl px-6 py-32 text-center md:px-10 md:py-40">
        <div className="hero-fade">
          <p className="text-[11px] uppercase tracking-[0.4em] text-rose">
            Private Nailartist · Wien 1010
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            Deine Auszeit für perfekte, natürliche Nägel
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-serif text-xl text-foreground/85 md:text-2xl">
            In privater Atmosphäre – mit voller Aufmerksamkeit nur für dich
          </p>
          <div className="gold-divider mx-auto my-8" />
          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-foreground/85">
            Natürliche Gelnägel & Russian Manicure in Wien
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-gold">★</span> 5.0 Bewertung — über 650 zufriedene Kundinnen
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaButton />
            <p className="text-xs italic font-light text-muted-foreground">
              Beliebte Termine schnell vergeben.
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-elegant">
          <video
            ref={(el) => { if (el) el.playbackRate = 0.5; }}
            src={showcaseVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-[16/9] w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose/10 via-transparent to-nude/20" />
        </div>
        <p className="mt-5 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Nagelstudio in Wien, 1010 — nur wenige Gehminuten von der Station Schwarzenbergplatz
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function USP() {
  const items = [
    { t: "Private Atmosphäre", d: "Keine andere Kundin gleichzeitig — du hast den Raum für dich." },
    { t: "Präzise & sauber", d: "Russian Manicure mit höchster Genauigkeit und sterilen Werkzeugen." },
    { t: "Natürliche Eleganz", d: "Fokus auf zarte, alltagstaugliche Designs in Nude- und Rosétönen." },
    { t: "Über 650 Kundinnen", d: "Vertrauen aus Jahren Erfahrung — viele kommen seit dem ersten Termin wieder." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Warum Paula</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Warum Kundinnen sich für Paula entscheiden
          </h2>
          <div className="mx-auto gold-divider my-8" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article
              key={it.t}
              className="rounded-2xl border border-border/70 bg-card p-8 transition hover:border-rose hover:shadow-soft"
            >
              <span className="font-serif text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-xl text-foreground">{it.t}</h3>
              <div className="mt-3 h-px w-8 bg-border" />
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{it.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div aria-label="5 von 5 Sternen" className="flex items-center justify-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.95 6.36 6.8.7-5.1 4.78 1.45 6.86L12 17.77 5.9 21.2l1.45-6.86-5.1-4.78 6.8-.7L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function Trust() {
  const testimonials = [
    { text: "Perfekte Nägel – wie immer! Komme seit Jahren und bin jedes Mal begeistert.", name: "Ursula" },
    { text: "Sauber, hygienisch, arbeitet sehr genau!", name: "Natascha" },
    { text: "Ich war anfangs skeptisch, aber das Ergebnis ist einfach wunderschön. So präzise und sauber gearbeitet – ich liebe meine Nägel!", name: "Sabrina" },
    { text: "Super Maniküristin – die japanische Maniküre sieht toll aus.", name: "Miriam" },
    { text: "Excellent service, with great care and attention to detail. Definitely recommended!", name: "Francesca" },
    { text: "Die Beste in Wien – immer top Ergebnis und wunderschöne Nägel.", name: "Aleksandra" },
  ];
  return (
    <section className="bg-nude py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-rose">Bewertungen</p>
        <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
          Das sagen meine Kundinnen
        </h2>
        <div className="mx-auto gold-divider my-8" />
        <p className="text-sm font-light text-muted-foreground">
          <span className="text-gold">★</span> 5.0 Bewertung — über 650 zufriedene Kundinnen
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl bg-background p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-elegant"
            >
              <Stars />
              <blockquote className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-foreground/90">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/80">
          Verifizierte Bewertungen über Treatwell
        </p>
        <div className="mt-10">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const categories = [
    {
      title: "Neues Set",
      items: [
        { name: "Neues Set mit Gel / Polygel / Rubber Base — S/M", price: "ab 90 €" },
        { name: "Neues Set mit Gel / Polygel / Rubber Base — L", price: "ab 100 €" },
      ],
    },
    {
      title: "Auffüllen",
      items: [
        { name: "Auffüllen — S/M", price: "ab 90 €" },
        { name: "Auffüllen — L", price: "ab 100 €" },
      ],
    },
    {
      title: "Maniküre",
      items: [
        { name: "Russische Maniküre ohne Lack", price: "50 €" },
        { name: "Japanische Maniküre", price: "60 €" },
        { name: "Russische Maniküre + Entfernung", price: "75 €" },
      ],
    },
    {
      title: "Extras",
      items: [
        { name: "Easy Design", price: "ab 5 €" },
        { name: "Chrome Powder", price: "10 €" },
      ],
    },
  ];
  return (
    <section id="services" className="bg-nude/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Leistungen & Preise</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Nageldesign & Maniküre in Wien</h2>
          <div className="mx-auto gold-divider my-8" />
          <p className="text-sm font-light leading-relaxed text-muted-foreground">
            Klare Preise für hochwertige, natürliche Ergebnisse.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              className="rounded-2xl bg-background p-8 shadow-soft transition hover:shadow-elegant md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">{cat.title}</h3>
                <span className="font-serif text-sm text-gold">0{i + 1}</span>
              </div>
              <div className="gold-divider mt-4 mb-6" />
              <ul className="divide-y divide-border/70">
                {cat.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-baseline justify-between gap-6 py-3 text-sm font-light"
                  >
                    <span className="text-foreground/85">{it.name}</span>
                    <span className="whitespace-nowrap font-serif text-base text-rose">{it.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs italic font-light text-muted-foreground">
          Die Preise können je nach Aufwand variieren.
        </p>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-gold">✦</span> &nbsp; Nagelmodellagen ab 18 Jahren
        </p>
        <div className="mt-12 text-center">
          <CtaButton />
        </div>

        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-rose">Nagellänge</p>
            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Finde deine Länge</h3>
            <div className="gold-divider my-6" />
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Damit du deine Wunschlänge ganz einfach bestimmen kannst, orientiere dich an
              unserer Übersicht — gemessen ab der Fingerkuppe.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-light text-foreground/80">
              <li><span className="font-serif text-gold">S</span> &nbsp; 0–2 mm ab Fingerkuppe</li>
              <li><span className="font-serif text-gold">M</span> &nbsp; 3–9 mm ab Fingerkuppe</li>
              <li><span className="font-serif text-gold">L</span> &nbsp; 1–1,5 cm ab Fingerkuppe</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={nailLengths}
              alt="Nagellängen S, M, L im Vergleich"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
  return (
    <section id="gallery" className="bg-nude py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Galerie</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Ausgewählte Arbeiten</h2>
          <div className="mx-auto gold-divider my-8" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {imgs.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-background shadow-soft">
              <img
                src={src}
                alt={`Nail design ${i + 1}`}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-nude" />
          <img
            src={aboutArtist}
            alt="Paula Venc, Private Nailartist in Wien"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-elegant"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Über mich</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Hi, ich bin Paula.</h2>
          <div className="gold-divider my-8" />
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Paula ist seit 2018 Nageldesignerin in Wien und spezialisiert sich auf kurze, natürliche Gelnägel sowie Russian Manicure.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Als private Nailartist legt sie besonderen Wert auf präzise, saubere Arbeit und ein Ergebnis, das natürlich wirkt und perfekt zum Alltag passt.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Dabei folgt sie einer klaren Philosophie: Perfektion bedeutet nicht, makellos zu sein, sondern das Beste aus jedem Detail herauszuholen.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Mit viel Sorgfalt und einem Auge fürs Detail entstehen so Nägel, die Persönlichkeit unterstreichen und sich natürlich in den Alltag einfügen.
          </p>
          <div className="mt-10">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section className="px-6 pb-8 md:px-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-nude px-8 py-6 text-center">
        <p className="text-sm font-light tracking-wide text-foreground/80">
          <span className="font-serif text-gold">✦</span> &nbsp;
          Nagelmodellagen sind ab 18 Jahren möglich
        </p>
      </div>
    </section>
  );
}

function Studio() {
  const images = [
    { src: studio1, alt: "Empfangsbereich des Studios mit zarten Roséˇtönen" },
    { src: studio2, alt: "Eingang und Treppe zum Studio" },
    { src: studio3, alt: "Arbeitsplatz mit Nagellack-Wand" },
    { src: studio4, alt: "Detailansicht des Behandlungsplatzes" },
  ];
  return (
    <section id="studio" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Studio & Atmosphäre</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Dein Termin in ruhiger, privater Atmosphäre
          </h2>
          <div className="mx-auto gold-divider my-8" />
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Während deines Termins ist keine weitere Kundin im Studio – so kannst du dich ganz entspannt auf dich konzentrieren und die Zeit genießen.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-nude shadow-soft transition duration-500 hover:shadow-elegant"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-lg italic text-foreground/80 md:text-xl">
          Private Atmosphäre – keine Hektik, keine Wartezeiten
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const hours = [
    { day: "Montag", time: "11:00 – 20:30", open: true },
    { day: "Dienstag", time: "11:00 – 20:30", open: true },
    { day: "Mittwoch", time: "11:00 – 20:30", open: true },
    { day: "Donnerstag", time: "11:00 – 20:30", open: true },
    { day: "Freitag", time: "11:00 – 20:30", open: true },
    { day: "Samstag", time: "Wir haben geschlossen", open: false },
    { day: "Sonntag", time: "Wir haben geschlossen", open: false },
  ];
  return (
    <section
      id="oeffnungszeiten"
      className="px-6 py-24 md:px-10 md:py-32"
      style={{ backgroundColor: "color-mix(in oklab, var(--rose) 28%, white)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-deep">Termine</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Öffnungszeiten</h2>
          <div className="mx-auto gold-divider my-8" />
        </div>
        <ul className="mx-auto max-w-lg space-y-3 text-sm font-light">
          {hours.map((h) => (
            <li
              key={h.day}
              className="grid grid-cols-[14px_1fr_auto] items-center gap-4 border-b border-foreground/10 pb-3"
            >
              <span
                className={
                  "h-2.5 w-2.5 rounded-full " +
                  (h.open ? "bg-foreground" : "border border-foreground/40")
                }
                aria-hidden="true"
              />
              <span className="text-foreground/85">{h.day}</span>
              <span className={h.open ? "text-foreground/85" : "text-muted-foreground"}>
                {h.time}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-foreground px-8 py-20 text-center text-background shadow-elegant md:px-16">
        <p className="text-xs uppercase tracking-[0.35em] text-rose">Termin</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
          Bereit für gepflegte, natürliche Nägel?
        </h2>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />
        <p className="mx-auto max-w-md text-base font-light text-background/70">
          Sichere dir jetzt deinen Termin für gepflegte, natürliche Nägel in Wien.
        </p>
        <a
          href="https://example.com/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-rose px-10 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-rose-deep"
        >
          Jetzt Termin sichern
        </a>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-background/50">
          Wien 1010 — Nähe Schwarzenbergplatz
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-serif text-xl text-background">Paula Venc</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-background/60">
            Private Nailartist · Vienna
          </p>
        </div>
        <div className="space-y-2 text-sm font-light">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60">Adresse</p>
          <address className="not-italic leading-relaxed text-background/85">
            Fichtegasse 7<br />
            1. Bezirk, 1010 Wien
          </address>
          <a href="tel:+436642215398" className="block pt-2 transition hover:text-rose">0664 2215398</a>
          <a href="mailto:office@paulavenc.at" className="block transition hover:text-rose">
            office@paulavenc.at
          </a>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60">Folge mir</p>
          <div className="mt-3 flex gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/paula.venc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-rose hover:text-rose"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Paula-Venc-Private-Nailartist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition hover:border-rose hover:text-rose"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.6V14h2.7v8h3.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-background/50 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Paula Venc — Private Nailartist</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="transition hover:text-rose">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition hover:text-rose">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  return (
    <a
      href="tel:+436642215398"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-rose px-6 py-4 text-center text-sm font-medium tracking-wide text-primary-foreground shadow-elegant md:hidden"
    >
      <span>Jetzt buchen – 0664 221 5398</span>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background pb-16 md:pb-0">
      <Nav />
      <Hero />
      <VideoShowcase />
      <USP />
      <About />
      <Trust />
      <Services />
      <Gallery />
      <Studio />
      <Hours />
      <Booking />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
