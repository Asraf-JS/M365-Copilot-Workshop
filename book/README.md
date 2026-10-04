# Participant book

This folder builds [M365-Copilot-Workshop-Book.pdf](../M365-Copilot-Workshop-Book.pdf), a printable book of the whole workshop, from the same Markdown files the website uses. Edit a topic's `README.md` or `prompts.md`, rebuild, and the book picks up the change.

The build tools, layout, colour palettes and the About the author page live in the shared [training-book-kit](https://github.com/Asraf-JS/training-book-kit), so every book in the series looks the same. This folder only holds what is specific to this workshop.

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
| `book.config.json` | Everything specific to this book: title, cover text, palette, chapter list and program flow steps |
| `front/introduction.md` | The "Before you begin" chapter |
| `package.json` | Installs the shared kit |

## Picking up kit changes

`package-lock.json` pins the kit to a specific version, so the book only changes when you choose. After the layout, a palette or the author page changes in the kit, run this before you build:

```
npm update training-book-kit
```

Then commit the updated `package-lock.json` along with the rebuilt PDF.

See the [kit's README](https://github.com/Asraf-JS/training-book-kit#readme) for every config option and for how the Markdown is converted.
