import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Paula Venc – Private Nailartist Wien" },
      { name: "description", content: "Natürliche, elegante Nägel in Wien. Präzision, Hygiene und perfekte Ergebnisse von Paula Venc – Private Nailartist." },
      { name: "author", content: "Paula Venc" },
      { property: "og:title", content: "Paula Venc – Private Nailartist Wien" },
      { property: "og:description", content: "Natürliche, elegante Nägel in Wien. Präzision, Hygiene und perfekte Ergebnisse von Paula Venc – Private Nailartist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Paula Venc – Private Nailartist Wien" },
      { name: "twitter:description", content: "Natürliche, elegante Nägel in Wien. Präzision, Hygiene und perfekte Ergebnisse von Paula Venc – Private Nailartist." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7785bf7-9aa3-4840-9785-f106d9c936f9/id-preview-699cb16a--a9cb1903-aa1c-4029-a142-39c8aebf14fb.lovable.app-1778003859637.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7785bf7-9aa3-4840-9785-f106d9c936f9/id-preview-699cb16a--a9cb1903-aa1c-4029-a142-39c8aebf14fb.lovable.app-1778003859637.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Paula Venc – Private Nailartist",
          description: "Natürliche, elegante Nägel in Wien. Präzision, Hygiene und perfekte Ergebnisse von Paula Venc – Private Nailartist.",
          url: "https://elegant-nail-vienna.lovable.app/",
          telephone: "+436642215398",
          email: "office@paulavenc.at",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Fichtegasse 7",
            addressLocality: "Wien",
            postalCode: "1010",
            addressCountry: "AT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 48.2021,
            longitude: 16.3767,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "11:00",
              closes: "20:30",
            },
          ],
          priceRange: "€€",
          image: "https://elegant-nail-vienna.lovable.app/assets/logo-paula-venc-Cno5jLH0.jpg",
          sameAs: [
            "https://www.instagram.com/paula.venc/",
            "https://www.facebook.com/Paula-Venc-Private-Nailartist",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "650",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
