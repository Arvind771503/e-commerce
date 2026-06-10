// App
export const APP_META = {
  NAME: 'ShopHere',
  YEAR: new Date().getFullYear(),
  FOOTER_TEXT: `© ${new Date().getFullYear()} ShopHere. Built with Angular 19.`,
  TAGLINE: 'Your one-stop destination for everything.',
} as const;

// Navigation
export const NAV_LABELS = {
  PRODUCTS: 'Products',
  CART: 'Cart',
  LOGO_ALT: 'ShopHere home',
  TOGGLE_MENU: 'Toggle menu',
} as const;

// Page Titles & Subtitles
export const PAGE_TITLES = {
  PRODUCTS: 'All Products',
  CART: 'Shopping Cart',
  CONTACT: 'Contact Us',
} as const;

export const PAGE_SUBTITLES = {
  PRODUCTS: 'Discover our curated collection',
  CART: 'Review and manage your selected items',
  CONTACT: "We'd love to hear from you",
} as const;

// Tab Labels
export const TAB_LABELS = {
  CART: 'Cart',
  CONTACT: 'Contact Us',
} as const;

// Button Labels
export const BTN_LABELS = {
  ADD_TO_CART: 'Add to Cart',
  ADDED: 'Added',
  REMOVE: 'Remove',
  CLEAR_CART: 'Clear Cart',
  CHECKOUT: 'Proceed to Checkout',
  SEND_MESSAGE: 'Send Message',
  SEND_ANOTHER: 'Send Another Message',
  BROWSE_PRODUCTS: 'Browse Products',
  RETRY: 'Retry',
  CLEAR_FILTERS: 'Clear Filters',
  DISMISS: 'Dismiss',
} as const;

// Toast Messages
export const TOAST_MESSAGES = {
  ITEM_ADDED: (name: string) => `"${name}" added to cart!`,
  ITEM_REMOVED_NAMED: (name: string) => `"${name}" removed from cart.`,
  ITEM_REMOVED: 'Item removed from cart.',
  CART_CLEARED: 'Cart cleared.',
  CONTACT_SUCCESS: "Message sent! We'll get back to you within 24 hours.",
} as const;

// Status / Dynamic Text
export const STATUS_TEXT = {
  LOADING: 'Loading products...',
  LOAD_FAILED: 'Failed to load products',
  LOAD_FAILED_MSG: 'Could not fetch products. Please try again.',
  OUT_OF_STOCK: 'Out of Stock',
  IN_STOCK: (count: number) => `${count} in stock`,
  SHOWING: (shown: number, total: number) =>
    `Showing ${shown} of ${total} products`,
  SHOWING_FOR: (query: string) => `for "${query}"`,
  ITEMS_COUNT: (count: number) => `${count} item${count === 1 ? '' : 's'}`,
  GRAND_TOTAL_LABEL: 'Grand Total',
  REQUIRED_FIELDS_NOTE: '* Required fields',
  CHAR_COUNT: (current: number, min: number) => `${current} / ${min} min`,
} as const;

// Empty States
export const EMPTY_STATES = {
  PRODUCTS: {
    TITLE: 'No products found',
    MESSAGE:
      "Try adjusting your search or filter to find what you're looking for.",
  },
  CART: {
    TITLE: 'Your cart is empty',
    MESSAGE: "Looks like you haven't added anything yet. Start shopping!",
  },
} as const;

// Form Labels & Placeholders
export const FORM_LABELS = {
  NAME: 'Full Name',
  EMAIL: 'Email Address',
  PHONE: 'Phone Number',
  MESSAGE: 'Message',
  REQUIRED_MARK: '*',
} as const;

export const FORM_PLACEHOLDERS = {
  NAME: 'Full name',
  EMAIL: 'Email address',
  PHONE: 'Phone number',
  MESSAGE: 'Write your message here...',
  SEARCH: 'Search products...',
} as const;

// Contact Success
export const CONTACT_SUCCESS = {
  HEADING: 'Message Sent!',
  SUBTEXT:
    "Thank you for reaching out. We'll get back to you within 24 hours.",
} as const;

// Product Card
export const PRODUCT_LABELS = {
  RATING: 'Rating',
  CATEGORY: 'Category',
  IMG_FALLBACK: 'No Image',
} as const;

// Table Headers
export const CART_TABLE_HEADERS = {
  PRODUCT: 'Product',
  PRICE: 'Price',
  QUANTITY: 'Quantity',
  TOTAL: 'Total',
} as const;
