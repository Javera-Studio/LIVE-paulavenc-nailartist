import { useEffect } from "react";
import { Link } from "react-router-dom";


function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="font-serif text-xl text-foreground">{title}</h2>
      <div className="space-y-2 text-foreground/80">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = "Datenschutzerklärung — Paula Venc Private Nailartist Wien";
  }, []);
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-rose"
        >
          ← Zurück
        </Link>
        <h1 className="mt-8 font-serif text-4xl text-foreground md:text-5xl">
          Datenschutzerklärung
        </h1>
        <div className="gold-divider my-8" />
        <div className="space-y-8 font-light leading-relaxed text-foreground/85">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
            Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
            TKG 2003).
          </p>

          <Section title="Verantwortliche">
            <p>Paula Venc</p>
            <p>Schubertring 4/7</p>
            <p>1010 Wien</p>
            <p>
              E-Mail: <a href="mailto:office@paulavenc.at" className="text-foreground transition hover:text-rose">office@paulavenc.at</a>
            </p>
          </Section>

          <Section title="Kontakt mit uns">
            <p>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen,
              werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
          </Section>

          <Section title="Terminbuchung über externe Anbieter">
            <p>
              Für Terminbuchungen werden Sie auf externe Plattformen (z.B. Treatwell oder Phorest)
              weitergeleitet. Dabei gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Unsere Website verwendet nur technisch notwendige Cookies, um die Funktion der Seite
              sicherzustellen.
            </p>
          </Section>

          <Section title="Server-Logfiles">
            <p>
              Der Provider der Website erhebt und speichert automatisch Informationen (z.B.
              IP-Adresse, Browsertyp, Uhrzeit), die Ihr Browser automatisch übermittelt. Diese
              Daten sind nicht bestimmten Personen zuordenbar.
            </p>
          </Section>

          <Section title="Ihre Rechte">
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit und Widerspruch zu.
            </p>
            <p>
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
              verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
