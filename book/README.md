# Participant book

This folder builds [M365-Copilot-Workshop-Book.pdf](../M365-Copilot-Workshop-Book.pdf), a printable book of the whole workshop, from the same Markdown files the website uses. Edit a topic's `README.md` or `prompts.md`, rebuild, and the book picks up the change.

## Build it

You need [Node.js](https://nodejs.org/) 20 or later.

```
cd book
npm install
npx playwright install chromium
npm run build
```

The PDF is written to the repository root.

## What's in here

| File | What it does |
|------|-------------|
| `book.config.json` | Everything specific to this book: title, cover text, author, palette, and the list of chapters |
| `front/` | Pages that exist only in the book: About the author and the introduction |
| `theme/series.css` | The shared layout for every book in the series. Don't change it for one book |
| `theme/palettes/` | One colour file per product. This book uses `copilot.css` |
| `build.mjs` | Turns the Markdown into HTML, lays out pages with paged.js, and prints the PDF with Chromium |

## Reusing it for another book in the series

1. Copy this `book/` folder into the other course repository.
2. In `book.config.json`, change the title lines, kicker, subtitle, blurb, cover icons, output file name and chapter list.
3. Set `palette` to the product, for example `power-automate`. To add a product, copy a palette file and change the colours. Everything else stays the same, which is what keeps the series consistent.

Cover icons can be any of `chat`, `doc`, `check`, `spark`, `play`, `plus` and `lines`.

## How the Markdown is converted

- Each topic's `README.md` becomes a chapter. Its `prompts.md` follows as "Hands-on exercises".
- The topic number is dropped from the heading ("03 — Copilot Chat" becomes Chapter 3, "Copilot Chat").
- Website-only lines are removed: the "Prompts to Try" link and the Back/Next navigation.
- An image followed by an italic line becomes a figure with a caption.
- Callouts are coloured by their opening bold label: Tip and Good habit are teal, Try it is purple, Key point and Why it matters are orange, and everything else (Note, License note) is blue.
- Links to other pages of the site become plain text. Links to sample files point to the GitHub repository.
