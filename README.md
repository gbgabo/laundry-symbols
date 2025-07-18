<div align="center">
<img src="./public/img/symbols.png" alt="main laundry symbols" width="500px">
<h1>laundry-symbols</h1>
<h2>A list to help understand those symbols found inside our clothes</h2>
</div>

[**laundry-symbols**](https://laundry-symbols.vercel.app/) is a page, built with Astro, Tailwind and Typescript, that lists most of the so called [_laundry symbols_](https://en.wikipedia.org/wiki/Laundry_symbol) found on every clothing, indicating the manufacturer's suggestions as to **methods of washing, drying, dry-cleaning and ironing clothing**.

<div align="center">
    <img src="./public/img/views.png" alt="main laundry symbols" width="900px">
</div>

<br>

## 🌎 Available Languages

The website is currently available in 2 languages:

| Language             | Url                                                                                          |
| :------------------- | :------------------------------------------------------------------------------------------- |
| English              | [`/`](https://laundry-symbols.vercel.app/) or [`/en`](https://laundry-symbols.vercel.app/en) |
| Brasilian Portuguese | [`/pt-br`](https://laundry-symbols.vercel.app/pt-br)                                         |

<br>

## 🧞 Running the Project

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

<br>

## ➕ Adding new content

### Add a new symbol

- Add the symbol image

All symbol images are stored in public/img/symbols, divided by category

- Add the symbol data

  All symbols are stored in `src/content/port/` in .json files. It's required to fill the symbol minimum attributes as followed in the symbolCollection on `src/content/config.ts`.

### Add a new translation

- declare the new language on i18n configs

- declare the new language as a new label key on the symbols

- add the translations for the symbols and categories
