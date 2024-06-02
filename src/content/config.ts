import { z, defineCollection } from "astro:content";

const categoryKey = z.enum([
  "washing",
  "bleaching",
  "drying",
  "ironing",
  "professional",
  "wringing",
]);

const categoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.object({
      en: z.string(),
      "pt-br": z.string().optional(),
    }),
    image: z.string(),
  }),
});

const symbolCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.object({
      en: z.string(),
      "pt-br": z.string().optional(),
    }),
    image: z.string(),
    category: categoryKey,
    variation: z.string().optional(),
    info: z
      .object({
        legacy: z.boolean(),
      })
      .default({
        legacy: false,
      }),
  }),
});

export const collections = {
  symbols: symbolCollection,
  categories: categoryCollection,
};
