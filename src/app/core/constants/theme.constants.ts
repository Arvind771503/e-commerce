export const CATEGORY_BADGE_CLASSES: Record<string, string> = {
  Electronics: 'bg-primary-100 text-primary-700',
  Clothing: 'bg-pink-100 text-pink-700',
  Books: 'bg-success-light text-success',
  Home: 'bg-warning-light text-warning',
  Sports: 'bg-orange-100 text-orange-700',
};

export const DEFAULT_BADGE_CLASS = 'bg-neutral-100 text-neutral-600';

export const CATEGORY_COLORS = [
  'bg-primary-100', 'text-primary-700',
  'bg-pink-100', 'text-pink-700',
  'bg-success-light', 'text-success',
  'bg-warning-light', 'text-warning',
  'bg-orange-100', 'text-orange-700',
  'bg-neutral-100', 'text-neutral-600',
] as const;
