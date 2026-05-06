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
        <div className="space-y-6 font-light leading-relaxed text-foreground/85">
          <div>
            <p className="font-medium text-foreground">Paula Venc</p>
            <p>Private Nailartist</p>
          </div>
          <div>
            <p>Fichtegasse 7</p>
            <p>1010 Wien</p>
            <p>Österreich</p>
          </div>
          <div>
            <p>
              E-Mail:{" "}
              <a href="mailto:office@paulavenc.at" className="text-foreground transition hover:text-rose">office@paulavenc.at</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
