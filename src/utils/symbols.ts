import { getCollection } from "astro:content";
import type { Symbol, Category } from "~/types";
import { defaultLang, type Lang } from "~/i18n/ui";

const symbols = await getCollection("symbols");
const categories = await getCollection("categories");
interface CategoryById {
  [key: string]: Category;
}
interface SymbolsByAttribute {
  [key: string]: Symbol[];
}

const symbolsByCategory = (lang: Lang = defaultLang) =>
  symbols.reduce((symbolsObject: SymbolsByAttribute, symbol) => {
    const symbolData = {
      ...symbol.data,
      title: symbol.data.title[lang],
    };
    if (symbolsObject[symbol.data.category.id]) {
      symbolsObject[symbol.data.category.id].push(symbolData);
    } else {
      symbolsObject[symbol.data.category.id] = [symbolData];
    }
    return symbolsObject;
  }, {});

export const fetchCategories = (lang: Lang = defaultLang) =>
  categories.reduce((categoryObject: CategoryById, category) => {
    const categoryData = {
      ...category.data,
      title: category.data.title[lang],
    };
    if (!categoryObject[category.id]) {
      categoryObject[category.id] = categoryData;
    }
    return categoryObject;
  }, {});

export const fetchSymbols = (lang: Lang = defaultLang) => {
  const orderedSymbols: SymbolsByAttribute = {};

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
