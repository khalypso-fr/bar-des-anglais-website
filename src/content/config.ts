import { z, defineCollection } from 'astro:content';

const menuRestaurantSimpleItem = z.object({
  title: z.string(),
  price: z.number().positive(),
  description: z.string().optional(),
});

const menuRestaurantVariantItem = z.object({
  title: z.string(),
  description: z.string(),
  variants: z.array(z.object({ price: z.number().positive(), description: z.string() })),
});

export const menuRestaurantItem = z.union([menuRestaurantSimpleItem, menuRestaurantVariantItem]);

export const menu = z.object({
  title: z.string(),
  categories: z.array(
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      items: z.array(menuRestaurantItem),
    })
  ),
});

export const testimonial = z.object({
  name: z.string(),
});

export const collections = {
  menu: defineCollection({
    schema: menu,
  }),
  testimonial: defineCollection({
    schema: testimonial,
  }),
};
