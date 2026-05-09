import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Paula Venc Private Nailartist Wien" },
      { name: "description", content: "Impressum von Paula Venc, Private Nailartist in Wien 1010." },
      { property: "og:title", content: "Impressum — Paula Venc" },
      { property: "og:description", content: "Impressum von Paula Venc, Private Nailartist in Wien 1010." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-rose"
        >
          ← Zurück
        </Link>

        <h1 className="mt-8 font-serif text-4xl text-foreground md:text-5xl">Impressum</h1>
        <div className="gold-divider my-8" />

        <div className="space-y-8 font-light leading-relaxed text-foreground/85">

          {/* Rechtliche Grundlage */}
          <p className="text-sm text-foreground/60">
            Angaben gemäß Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch,
            §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
          </p>

          {/* Kontakt */}
          <div className="space-y-1">
            <p className="font-medium text-foreground">Paula Venc</p>
            <p>Schubertring 4/7</p>
            <p>1010 Wien</p>
            <p>Österreich</p>
          </div>

          <div className="space-y-1">
            <p>
              Tel:{" "}
              <a href="tel:+436642215398" className="text-foreground transition hover:text-rose">
                +43 664 2215398
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:office@paulavenc.at" className="text-foreground transition hover:text-rose">
                office@paulavenc.at
              </a>
            </p>
          </div>

          {/* Unternehmensangaben */}
          <div className="space-y-1">
            <p><span className="font-medium text-foreground">Unternehmensgegenstand:</span> Nageldesign</p>
            <p><span className="font-medium text-foreground">GLN:</span> 9110033728152</p>
            <p><span className="font-medium text-foreground">UID-Nummer:</span> ATU79520635</p>
            <p><span className="font-medium text-foreground">GISA:</span> 36069972</p>
          </div>

          {/* Berufsrecht */}
          <div className="space-y-1">
            <p><span className="font-medium text-foreground">Mitglied bei:</span> WKO</p>
            <p>
              <span className="font-medium text-foreground">Berufsrecht:</span> Gewerbeordnung:{" "}
              
                href="http://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition hover:text-rose"
              >
                www.ris.bka.gv.at
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">Aufsichtsbehörde/Gewerbebehörde:</span>{" "}
              Magistratisches Bezirksamt des I. Bezirkes
            </p>
            <p><span className="font-medium text-foreground">Berufsbezeichnung:</span> Modellieren von Fingernägeln</p>
          </div>

          {/* Online-Streitbeilegung */}
          <div className="space-y-2">
            <p className="font-medium text-foreground">Angaben zur Online-Streitbeilegung</p>
            <p>
              Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform
              der EU zu richten:{" "}
              <a
                href="http://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition hover:text-rose"
              >
                ec.europa.eu/odr
              </a>
            </p>
            <p>
              Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
