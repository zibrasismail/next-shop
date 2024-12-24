export const APP_NAME = process.env.NEXT_PUBLIC_API_NAME || "Next Shop";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_API_DESCRIPTION ||
  "A Ecommerce Website built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT = Number(
  process.env.LATEST_PRODUCTS_LIMIT || 4
);
