import { getCollection } from "astro:content";

const symbols = await getCollection("symbols");
const categories = await getCollection("categories");

interface Category {
  title: {
    en: string;
  };
  image: string;
}
interface Symbol {
  title: {
    en: string;
  };
  image: string;
  category: string;
  info: {
    legacy: boolean;
  };
}
interface CategoriesByAttribute {
  [key: string]: Category;
}

interface SymbolObjectByAttribute {
  [key: string]: Symbol[];
}

const categoriesById = categories.reduce(
  (symbolsObject: CategoriesByAttribute, category) => {
    if (!symbolsObject[category.id]) {
      symbolsObject[category.id] = category.data;
    }
    return symbolsObject;
  },
  {}
);

const symbolsByCategory = symbols.reduce(
  (symbolsObject: SymbolObjectByAttribute, symbol) => {
    if (symbolsObject[symbol.data.category]) {
      symbolsObject[symbol.data.category].push(symbol.data);
    } else {
      symbolsObject[symbol.data.category] = [symbol.data];
    }
    return symbolsObject;
  },
  {}
);

//const symbolsByCategory = Object.groupBy(symbols, ({ data }) => data.category);
//const categoriesById = Object.groupBy(categories, ({ id }) => id);

export const fetchSymbols = () => {
  return symbolsByCategory;
};

export const fetchCategories = () => {
  return categoriesById;
};
