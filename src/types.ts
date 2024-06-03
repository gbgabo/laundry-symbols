export interface Symbol {
  title: string;
  image: string;
  category: string;
  info: {
    legacy: boolean;
  };
}

export interface Category {
  title: string;
  image: string;
}
