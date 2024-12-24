import { z } from "zod";
import { formatNumber } from "./utils";

export const insertProductSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  category: z
    .string()
    .min(3, { message: "Category must be at least 3 characters" }),
  brand: z.string().min(3, { message: "Brand must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" }),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable(),
  price: z
    .string()
    .refine((price) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(price))), {
      message: "Price must be a number with up to 2 decimal places",
    }),
});
