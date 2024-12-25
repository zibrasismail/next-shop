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

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const signUpFormSchema = signInFormSchema
  .extend({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
