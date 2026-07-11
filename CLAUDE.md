# paulavenc-nailartist – Projektnotizen

One-Pager für paulavenc.at (Paula Venc – Private Nailartist Wien), gebaut von JAVERA Studio. Statisches React/Vite-SPA, Deployment über Vercel (kein eigenes Backend, keine API-Routes).

## Security Standards für JAVERA Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (SECURITY-STANDARDS.md). Referenzimplementierung für den Next.js-Fall: Sibling-Repo `javera-studio` (`next.config.ts`, `src/lib/rate-limit.ts`, `src/app/api/contact/route.ts`).

**Stack in diesem Repo:** Vite + React SPA (kein Next.js, kein eigener Node/Edge-Server, kein `next.config.*`). Statischer Build (`vite build` → `dist/`), gehostet auf Vercel. HTTP-Header werden daher **nicht** über `headers()` in einer Next-Config gesetzt, sondern über den `headers`-Array in `vercel.json` (Vercel wendet diese Header auf ausgelieferte Responses an).

### 1. HTTP Security Header

Umgesetzt in `vercel.json` (`headers`-Array, Route `/(.*)`):

- **Content-Security-Policy** – vor dem Setzen wurde der komplette Quellcode (`src/`, `index.html`) nach extern eingebundenen Ressourcen gescannt. Ergebnis (Stand Security-Review 2026-07-11):
  - Google Fonts: `fonts.googleapis.com` (Stylesheet) + `fonts.gstatic.com` (Font-Dateien) → in `style-src` bzw. `font-src` erlaubt
  - Kein Analytics/Tracking-Snippet (kein gtag, keine GA/GTM, kein Meta-Pixel)
  - Keine iframes, keine Maps-/Payment-Embeds
  - Buchung läuft ausschließlich über einen ausgehenden Link zu Treatwell (`buchung.treatwell.at`) – kein Embed, daher keine CSP-Freigabe nötig
  - Alle Bilder/Video lokal aus `src/assets`, werden beim Build gebündelt (`img-src`/`media-src` bleiben `'self'`)
  - Kein Fetch/XHR zu externen APIs (`connect-src 'self'`)
  - `style-src` enthält `'unsafe-inline'`, weil einzelne Komponenten (`src/components/ui/chart.tsx`, `src/components/ui/progress.tsx`, `src/pages/Index.tsx`) inline `style={{...}}`-Attribute verwenden
  - Das JSON-LD-Script (`type="application/ld+json"`) in `index.html` ist von `script-src` nicht betroffen (kein ausführbares Script), daher kommt `script-src` ohne `'unsafe-inline'` aus
- **Strict-Transport-Security** – `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options** – `SAMEORIGIN`
- **X-Content-Type-Options** – `nosniff`
- **Referrer-Policy** – `strict-origin-when-cross-origin`
- **Permissions-Policy** – `camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()` (Seite nutzt keines dieser Browser-Features clientseitig)

Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A). Da die Header nur über Vercel ausgeliefert werden, lassen sie sich lokal (`vite preview`) nicht testen – nur nach echtem Deploy verifizierbar.

Umsetzung in diesem Repo: `vercel.json`.

### 2. Formulare & API-Routes

Es gibt **kein** Kontakt- oder Buchungsformular in diesem Repo – die Seite hat keinen eigenen Server/keine API-Route. Kontakt läuft über `mailto:`/`tel:`-Links, Terminbuchung ausschließlich über einen externen Link zu Treatwell (dessen Formular/Backend außerhalb unserer Kontrolle liegt). Rate-Limiting/Honeypot/serverseitige Validierung sind daher hier nicht anwendbar – es gibt keine Eingabe, die dieses Repo entgegennimmt oder verarbeitet.

Falls künftig ein eigenes Kontaktformular hinzukommt: Muster aus `javera-studio` (`src/lib/rate-limit.ts` + Honeypot-Feld `hp_company` + serverseitige Validierung in einer API-Route) übernehmen. Ein reines Vite-SPA bräuchte dafür entweder eine Vercel Serverless/Edge Function unter `/api` oder einen Formular-Drittanbieter.

### 3. Secrets

Keine API-Keys/Secrets im Client-Code gefunden (geprüft: `src/`, `index.html`, `vite.config.ts`, `vercel.json`, `package.json`). Die App verwendet aktuell keine `import.meta.env`-Variablen. `.gitignore` deckt `.env`/`.env.*` explizit ab (zusätzlich zur bereits vorhandenen `*.local`-Regel).

### 4. Dependencies

`npm audit` vor Projektabschluss geprüft (2026-07-11). Das Lockfile enthielt anfangs verwaiste Reste aus einem früheren TanStack-Start/Wrangler-Template (16 Findings, u. a. mehrere High), die in `package.json` gar nicht mehr referenziert waren – ein frisches `npm install` hat das Lockfile bereinigt (auf 6 Findings). `npm audit fix` (ohne `--force`) hat die verbleibenden 6 Findings (1 High, 3 Moderate, 2 Low – alles Build-Tooling: vite/esbuild/postcss/js-yaml/@babel/core/brace-expansion, keine Runtime-Dependencies) ohne Breaking Changes an `package.json` behoben. Ergebnis: `0 vulnerabilities`.

### 5. robots.txt, sitemap.xml, security.txt

- `robots.txt` und `sitemap.xml` fehlen aktuell in diesem Repo (kein `public/`-Ordner vor diesem Review vorhanden) – bewusst **nicht** automatisch angelegt (Content-Entscheidung, keine Security-Maßnahme), sollte aber nachgezogen werden.
- `/.well-known/security.txt` ergänzt (RFC 9116), Kontakt-Mail aus Impressum/JSON-LD übernommen.

Umsetzung in diesem Repo: `public/.well-known/security.txt`.

### 6. Mixed Content

Keine `http://`-Ressourcen-Einbindungen gefunden. Zwei reine Text-Links in `src/pages/Impressum.tsx` (zu `ris.bka.gv.at` und `ec.europa.eu/odr`, gesetzlich vorgeschriebene Verweise auf Behörden-/EU-Seiten) verwenden noch `http://` – das ist kein Mixed-Content-Problem (keine eingebundene Ressource, nur ein ausgehender Link), aber optisch/SEO könnte man künftig auf `https://` prüfen, sobald Content-Änderungen ohnehin anstehen (außerhalb des Scopes dieses Security-Reviews, da reine Textstelle).

### 7. Dinge, die NICHT im Code passieren (manuell prüfen/einstellen)

| Punkt | Wo einstellen | Warum wichtig |
|---|---|---|
| **DNSSEC** | Beim Domain-Registrar | Schützt vor DNS-Spoofing/Cache-Poisoning |
| **DNS CAA-Record** | Beim DNS-Provider | Legt fest, welche CAs Zertifikate für die Domain ausstellen dürfen |
| **SSL/TLS-Zertifikat** | Bei Vercel automatisch (Let's Encrypt) | Auto-Renewal + TLS 1.3 |
| **SPF / DKIM / DMARC** | Beim E-Mail-/DNS-Provider (office@paulavenc.at) | Schützt die Domain vor E-Mail-Spoofing/Phishing |
| **Malware-/Blacklist-Scan** | Google Safe Browsing, VirusTotal, Sucuri SiteCheck | Bei jedem Webseitencheck durchführen |
| **Registrar-Zugang/2FA** | Beim Registrar | Kompromittierte Registrar-Logins sind ein häufiger Grund für gehackte Kundenseiten |
| **Treatwell-Buchungsstrecke** | Bei Treatwell | Liegt außerhalb unserer Kontrolle – dort eingegebene Kundendaten (Termine, ggf. Zahlungsdaten) werden nicht von diesem Repo verarbeitet |
