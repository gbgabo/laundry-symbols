import { getCollection } from "astro:content";
import type { Symbol, Category } from "~/types";

const symbols = await getCollection("symbols");
const categories = await getCollection("categories");
interface CategoriesByAttribute {
  [key: string]: Category;
}

interface SymbolObjectByAttribute {
  [key: string]: Symbol[];
}

const categoriesById = categories.reduce(
  (symbolsObject: CategoriesByAttribute, category) => {
    const categoryData = {
      ...category.data,
      title: category.data.title.en,
    };
    if (!symbolsObject[category.id]) {
      symbolsObject[category.id] = categoryData;
    }
    return symbolsObject;
  },
  {}
);

const symbolsByCategory = symbols.reduce(
  (symbolsObject: SymbolObjectByAttribute, symbol) => {
    const symbolData = {
      ...symbol.data,
      title: symbol.data.title.en,
    };
    if (symbolsObject[symbol.data.category]) {
      symbolsObject[symbol.data.category].push(symbolData);
    } else {
      symbolsObject[symbol.data.category] = [symbolData];
    }
    return symbolsObject;
  },
  {}
);

export const fetchSymbols = () => {
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
    orderedSymbols[category] = symbolsByCategory[category];
  });

  return orderedSymbols;
};

//const symbolsByCategory = Object.groupBy(symbols, ({ data }) => data.category);
//const categoriesById = Object.groupBy(categories, ({ id }) => id);

export const fetchCategories = () => {
  return categoriesById;
};
