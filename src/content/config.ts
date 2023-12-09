import { z, defineCollection } from "astro:content";

const categoryKey = z.enum([
  "washing",
  "bleaching",
  "drying",
  "ironing",
  "professional",
]);

const symbol = z.object({
  title: z.string(),
  image: z.string(),
  category: categoryKey,
});

const symbolCollection = defineCollection({
  type: "data",
  schema: z.object({
    lang: z.string(),
    emoji: z.string(),
    title: z.string(),
    description: z.string(),
    footer: z.string(),
    searchPrompt: z.string(),
    categories: z.record(
      categoryKey,
      z.object({
        name: z.string(),
        imageUrl: z.string(),
      })
    ),
    symbols: z.array(symbol),
  }),
});

export const collections = {
  symbols: symbolCollection,
};
