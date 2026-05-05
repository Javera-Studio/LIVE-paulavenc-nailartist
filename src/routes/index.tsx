import { createFileRoute } from "@tanstack/react-router";
import heroNails from "@/assets/hero-nails.jpg";
import aboutArtist from "@/assets/paula-portrait.png";
import logo from "@/assets/logo-paula-venc.jpg";
import nailLengths from "@/assets/nagellaenge.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="fade-up">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-rose">Private Nailartist · Wien</p>
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Natürliche, elegante Nägel in Wien
          </h1>
          <div className="gold-divider my-8" />
          <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
            Präzision, Hygiene & perfekte Ergebnisse — in einer ruhigen, privaten Atmosphäre, ganz auf dich abgestimmt.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              className="rounded-full bg-rose px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-soft transition hover:bg-rose-deep hover:shadow-elegant"
            >
              Jetzt Termin buchen
            </a>
            <a
              href="#services"
              className="rounded-full border border-foreground/15 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground/80 transition hover:border-rose hover:text-rose"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-nude" />
          <img
            src={heroNails}
            alt="Elegante natürliche Maniküre in Nude-Tönen"
            width={1536}
            height={1280}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-elegant"
          />
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
    { text: "Alles perfekt! Super Nägel, angenehme Atmosphäre – komme wieder 😊", name: "Ursula" },
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
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Neues Set", desc: "Aufbau eines neuen, natürlich wirkenden Nagelmodells — perfekt angepasst an deine Form." },
    { title: "Auffüllen", desc: "Pflege und Erhalt deines bestehenden Sets, für ein dauerhaft schönes Ergebnis." },
    { title: "Designs", desc: "Dezente Akzente, French oder feine Goldlinien — minimal und elegant." },
  ];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">Leistungen</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Schlicht. Hochwertig. Persönlich.</h2>
          <div className="mx-auto gold-divider my-8" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-10 transition hover:border-rose hover:shadow-soft"
            >
              <span className="font-serif text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
              <div className="mt-4 h-px w-10 bg-border transition group-hover:bg-rose" />
              <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-gold">✦</span> &nbsp; Nagelmodellagen ab 18 Jahren
        </p>

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
  const imgs = [g1, g2, g3, g4, g5, g6];
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
            Mit jahrelanger Erfahrung als private Nailartist in Wien liegt mein Fokus auf
            natürlichen Ergebnissen, höchster Präzision und einer entspannten Atmosphäre,
            in der du wirklich abschalten kannst.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Ich nehme mir bewusst Zeit — für jede Hand, jedes Detail und für dich.
          </p>
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

function Booking() {
  return (
    <section id="booking" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-foreground px-8 py-20 text-center text-background shadow-elegant md:px-16">
        <p className="text-xs uppercase tracking-[0.35em] text-rose">Termin</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
          Bereit für deine schönsten Nägel?
        </h2>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />
        <p className="mx-auto max-w-md text-base font-light text-background/70">
          Sichere dir jetzt deinen privaten Termin in Wien.
        </p>
        <a
          href="https://example.com/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-rose px-10 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-rose-deep"
        >
          Jetzt Termin buchen
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-sm font-light text-muted-foreground md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg text-foreground">Paula Venc</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em]">Private Nailartist · Vienna</p>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.3em] transition hover:text-rose"
        >
          Instagram @paulavenc
        </a>
        <p className="text-xs">© {new Date().getFullYear()} Paula Venc</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <About />
      <Info />
      <Booking />
      <Footer />
    </main>
  );
}
