export const languages = {
  en: { title: "English", emoji: "🇺🇸" },
  "pt-br": { title: "Portuguese", emoji: "🇧🇷" },
};

export const defaultLang = "en";

export const translations = {
  en: {
    "nav.title": "Laundry Symbols List",
    "nav.description":
      "List of the most common symbols found on clothing, describing the best way to wash them",
    "nav.footer":
      "<p>Made with ♥ by <a class='text-cyan-400' href='https://gabo.link'>gabo</a></p><p>Check the <a class='text-cyan-400' href='https://github.com/gbgabo/laundry-symbols'>project on github</a></p>",
    "nav.search": "Search",

    "filter.label": "Filter",
    "filter.all": "All",
    "filter.standard": "Standard",
    "filter.nonstandard": "Non Standard",
    "filter.standard.description":
      "The symbols based on GINETEX® international association for textile care labelling, adopted by most of the world",
    "filter.nonstandard.description":
      "Care symbols from specific countries, or legacy standards not produced anymore",
  },
  "pt-br": {
    "nav.title": "Lista de Simbolos de Lavagem",
    "nav.description":
      "Lista dos simbolos mais comuns encontrados nas roupas, descrevendo a melhor forma de limpá-las",
    "nav.footer":
      "<p>Feito com ♥ por <a class='text-cyan-400' href='https://gabo.link'>gabo</a></p><p>Visite o <a class='text-cyan-400' href='https://github.com/gbgabo/laundry-symbols'>projeto no github</a></p>",
    "nav.search": "Pesquisar",

    "filter.label": "Filtrar",
    "filter.all": "Todos",
    "filter.standard": "Padrão",
    "filter.nonstandard": "Não Padrão",
    "filter.standard.description":
      "Os símbolos baseados na associação internacional GINETEX® para rotulagem de cuidados têxteis, adotada pela maior parte do mundo",
    "filter.nonstandard.description":
      "Símbolos de lavagem de países específicos ou padrões legados que não são mais produzidos",
  },
} as const;

export type Lang = keyof typeof languages | undefined;
