export interface Symbol {
  title: string;
  image: string;
  category: { id: string };
  info: {
    legacy: boolean;
  };
}

export interface Category {
  title: string;
  image: string;
}
