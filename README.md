# Jesse Keller Website

Website von Jesse Keller - Unterlagen und Software aus der Schule.

## Technologie

- [Astro](https://astro.build/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cloudflare Workers](https://workers.cloudflare.com/) - Deployment

## Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build

# Vorschau des Builds
npm run preview
```

## Deployment

Die Website wird mit Cloudflare Workers deployed:

```bash
# Mit wrangler deployen
npx wrangler deploy
```

## Struktur

```
src/
├── components/     # Wiederverwendbare Komponenten
├── layouts/        # Seiten-Layouts
├── pages/          # Astro-Seiten (Routing)
└── styles/         # Globale Styles

public/
└── musik/          # Lilypond-Dateien und MIDI
```

## Lizenz

Die Lilypond-Dateien dürfen für private und schulische Zwecke verwendet werden.
