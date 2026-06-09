export const CATEGORIES = [
  'All',
  'Electronics',
  'Clothing',
  'Books',
  'Home',
  'Sports',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const STORAGE_KEYS = {
  CART: 'shophere_cart',
} as const;

export const TOAST_DURATION_MS = 3000;
