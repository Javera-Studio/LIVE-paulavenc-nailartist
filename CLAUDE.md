# paulavenc-nailartist – Projektnotizen

One-Pager für paulavenc.at (Paula Venc – Private Nailartist Wien), gebaut von JAVERA Studio. Statisches React/Vite-SPA, Deployment über Vercel (kein eigenes Backend, keine API-Routes).

## AEO (Answer Engine Optimization) Standards für JAVERA Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (AEO-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Gilt zusätzlich zu den bestehenden SEO- und Security-Standards. AEO baut auf sauberem SEO auf, ersetzt es nicht — technische SEO-Basis (Sitemap, robots.txt, Ladezeit, Crawlbarkeit) bleibt Voraussetzung.

Ziel: Inhalte so strukturieren, dass ChatGPT, Google AI Overviews, Perplexity, Gemini & Co. sie direkt als Antwort extrahieren und zitieren können — nicht nur klassisches Ranking.

### 1. FAQ-Content + FAQPage-Schema (höchster Hebel, immer umsetzen)

- Jede Kunden-Landingpage bekommt einen FAQ-Abschnitt mit echten Kundenfragen — nicht generisch, sondern konkret zur Branche/zum Angebot (z. B. "Wie lange hält Permanent Make-up?", "Was kostet eine Maniküre in Wien?", "Tut PMU weh?")
- FAQ-Fragen vor Umsetzung kurz mit der Kundin abstimmen — sie kennt die tatsächlich häufig gestellten Fragen aus der Praxis
- JSON-LD `FAQPage`-Schema für jeden FAQ-Block einbauen (ergänzt die bereits bestehenden Schema-Typen LocalBusiness/BeautySalon/Service/Review)
- Nach Umsetzung: Schema mit Google Rich Results Test validieren, bevor es live geht — fehlerhaftes Schema schadet mehr als gar keins

### 2. „Answer-First"-Struktur in Content-Blöcken

- Jeder inhaltliche Abschnitt beginnt mit der direkten Antwort in 1–2 Sätzen (ca. 40–60 Wörter), erst danach Kontext, Ausschmückung, Storytelling
- Kein "Storytelling zuerst, Antwort versteckt am Ende" — das erschwert die Extraktion für KI-Engines UND ist für ungeduldige menschliche Leser genauso besser
- Gilt besonders für: Leistungsbeschreibungen, Preisangaben, Behandlungsabläufe, Vorher/Nachher-Erklärungen

### 3. Überschriften-Struktur an echten Fragen ausrichten

- H2/H3-Überschriften so formulieren, wie eine Kundin tatsächlich fragen würde — nicht "Preise", sondern "Was kostet Permanent Make-up in Wien?"
- Überschriften-Hierarchie sauber halten (H1 → H2 → H3, keine Sprünge) — hilft sowohl klassischem SEO als auch AEO-Extraktion

### 4. Strukturierte Formate statt Fließtext, wo möglich

- Preisübersichten → Tabelle, nicht Fließtext-Aufzählung
- Behandlungsschritte/Abläufe → nummerierte Liste
- Leistungsvergleiche (z. B. "Klassisches Microblading vs. Ombré Brows") → Vergleichstabelle
- Prosa-Absätze nur dort belassen, wo echte Erklärung/Storytelling nötig ist (Über-uns-Texte, Markengeschichte)

### 5. Entity-Konsistenz (NAP + Branding)

- Name, Adresse, Öffnungszeiten (NAP) müssen exakt identisch sein auf: Website, Google Business Profile, Instagram-Bio, Treatwell-Profil, Facebook
- Firmenname immer in derselben Schreibweise verwenden — keine Varianten zwischen Kanälen
- Bei jedem neuen Projekt: NAP-Konsistenz als festen Punkt in der Launch-Checkliste mit aufnehmen

### 6. Speakable-Schema (optional, für lokale Sprachsuche)

- Bei Projekten mit starkem lokalem Suchfokus: `Speakable`-Schema für kurze, klar formulierte Kernaussagen ergänzen (Adresse, Öffnungszeiten, Kernleistung)
- Kein Standard-Muss bei jedem Projekt, aber sinnvoll bei Kunden mit Fokus auf lokale/Voice-Suche

### 7. Freshness-Signal

- Sichtbares "Zuletzt aktualisiert"-Datum bei Leistungsseiten/Preislisten dort einbauen, wo technisch sinnvoll (z. B. Preisseite) — Freshness ist ein messbarer Faktor dafür, ob KI-Engines eine Seite als Zitat-Quelle wählen
- Bei Preisänderungen: Datum aktiv mit aktualisieren, nicht nur den Preis ändern

### 8. Off-Page (an Kunden weitergeben, nicht Code-Aufgabe)

- Google-Rezensionen, Treatwell-Bewertungen und Instagram-Erwähnungen aktiv fördern — zählen als externe Vertrauenssignale für KI-Engines, nicht nur für Menschen
- Bei Partnerschaften (Beauty-Akademien, Coworking Spaces): gegenseitige Erwähnungen/Verlinkungen anstoßen, wo passend

### Kurz-Checkliste bei jedem neuen Projekt

- [ ] FAQ-Sektion mit echten Kundenfragen + FAQPage-Schema
- [ ] Answer-First-Struktur in allen Haupttextblöcken
- [ ] Überschriften als natürliche Fragen formuliert
- [ ] Preise/Abläufe/Vergleiche als Liste oder Tabelle statt Fließtext
- [ ] NAP-Konsistenz über alle Kanäle geprüft
- [ ] Schema mit Google Rich Results Test validiert
- [ ] Freshness-Datum bei Preis-/Leistungsseiten, wo sinnvoll

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
