import { getCollection } from "astro:content";
import type { Symbol, Category } from "~/types";

const symbols = await getCollection("symbols");
const categories = await getCollection("categories");
interface CategoriesByAttribute {
  [key: string]: Category;
}
type Lang = "en" | "pt-br";
interface SymbolObjectByAttribute {
  [key: string]: Symbol[];
}

export const fetchCategories = (lang) =>
  categories.reduce((symbolsObject: CategoriesByAttribute, category) => {
    const categoryData = {
      ...category.data,
      title: category.data.title[lang], //Needs to vary based on language
    };
    if (!symbolsObject[category.id]) {
      symbolsObject[category.id] = categoryData;
    }
    return symbolsObject;
  }, {});

const symbolsByCategory = (lang: Lang) =>
  symbols.reduce((symbolsObject: SymbolObjectByAttribute, symbol) => {
    const symbolData = {
      ...symbol.data,
      title: symbol.data.title[lang],
    };
    if (symbolsObject[symbol.data.category]) {
      symbolsObject[symbol.data.category].push(symbolData);
    } else {
      symbolsObject[symbol.data.category] = [symbolData];
    }
    return symbolsObject;
  }, {});

export const fetchSymbols = (lang = "en") => {
  const orderedSymbols: SymbolObjectByAttribute = {};

  const categoryOrder = [
    "washing",
    "bleaching",
    "drying",
    "ironing",
    "professional",
    "wringing",
  ];

  categoryOrder.map((category) => {
    orderedSymbols[category] = symbolsByCategory(lang)[category];
  });

  return orderedSymbols;
};

//const symbolsByCategory = Object.groupBy(symbols, ({ data }) => data.category);
//const categoriesById = Object.groupBy(categories, ({ id }) => id);
