import { z, defineCollection, reference } from "astro:content";

const i18nLabel = z.record(
  z.union([z.literal("en"), z.literal("pt-br")]),
  z.string()
);

const categoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: i18nLabel,
    image: z.string(),
  }),
});

const symbolCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: i18nLabel,
    image: z.string(),
    category: reference("categories"),
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
