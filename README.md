# ShopHere — Angular 19 E-Commerce Assessment

Build ShopHere E-Commerce application using Angular 19 with modern Angular patterns and
best practices.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 19 | Framework |
| Zoneless Change Detection | experimental | Performance — no zone.js |
| Signals (`signal`, `computed`, `effect`) | Angular 19 | Reactive state |
| Reactive Forms | Angular 19 | Contact form |
| Lazy Loaded Routes | Angular 19 | Code splitting |
| Tailwind CSS | v4 | For styling  |
| Lucide Angular | latest | Icons |
| localStorage | browser API | Cart persistence |

---

## Project Structure

```
src/app/
├── core/
│   ├── models/
│   │   ├── product.model.ts          # Product interface
│   │   └── cart-item.model.ts        # CartItem interface
│   │
│   ├── services/                     # Business logic
│   │   ├── product.service.ts        # rxResource loaders, filter, query stores
│   │   └── cart.service.ts           # addToCart, remove, update, clear
│   │   └── ui.service.ts             # showtoast, activeTab
│   │
│   └── constants/
│       ├── app.constants.ts          # categories, storage keys, durations
│       ├── ui.constants.ts           # ALL UI text strings — no hardcoding
│       ├── validation.constants.ts   # form rules + error messages
│       └── theme.constants.ts        # category badge color map
│
├── shared/
│   └── components/                   # Reusable dumb components (input/output only)
│       ├── navbar/
│       ├── loading-spinner/
│       ├── empty-state/
│       ├── toast/
│       ├── product-card/             # input: product, isInCart | output: addToCart, removeFromCart
│       └── cart-table/               # input: items, grandTotal, totalItems | output: increase, decrease, remove, clear
│
└── features/
    ├── products/
    │   └── products.component.ts     # Main collection grid container
    │
    └── cart-contact/
        ├── cart-contact.component.ts # Tab shell
        ├── cart/
        │   └── cart.component.ts     # Smart container — delegates to <app-cart-table>
        └── contact/
            └── contact.component.ts  # Smart container — owns reactive form
```

---



## Architecture Decisions

### 1. Smart vs Dumb Components
- **Dumb (shared)**: `ProductCardComponent`, `CartTableComponent` — only `input()`/`output()`, zero service injection, fully reusable
- **Smart (features)**: `ProductsComponent`, `CartComponent` — inject services, handle events, pass data down

### 2. Service
- **Service-Driven State Management** State is managed directly inside Angular services using Signals and rxResource. Services handle data fetching, state updates, and derived values, while components focus on displaying data and handling user interactions.


### 3. Global Theme via Tailwind v4 `@theme`
- All colors defined once in `styles.css` under `@theme {}`
- Use semantic tokens: `text-primary-600`, `bg-surface`, `border-border`, `text-error`
- Change brand color in one place → entire app updates

### 4. Zero Hardcoded Strings
- Every UI string lives in `core/constants/ui.constants.ts`
- Validation errors: `core/constants/validation.constants.ts`

### 5. Zoneless Angular 19
- `provideExperimentalZonelessChangeDetection()` in `app.config.ts`
- Change detection runs only when signals update

---
## Setup & Run

```bash
# Clone repository
git clone <repository-url>
cd <project-folder>

# Prerequisites: Node >= 20, Angular CLI 19
npm install -g @angular/cli@19

# Install dependencies
npm install

# Start development server
ng serve
```

Open: http://localhost:4200

```bash
# Production build
ng build
```

Build output will be generated in the `dist/` directory.

---


## Features

### Page 1 — Product Listing (`/`)
- Product data is loaded from `src/assets/data/products.json` via HttpClient and managed through Angular's rxResource
- Real-time search (name, description, category)
- Category filter tabs — horizontally scrollable on mobile
- Loading spinner + error retry + empty state with clear-filters action
- Add / Remove from cart directly on card with visual feedback

### Page 2 — Cart & Contact (`/cart`)
**Tab 1 — Cart**
- Mobile: card layout | Desktop: table layout
- Increase / Decrease quantity (auto-removes at 0)
- Remove item with toast feedback
- Clear entire cart
- Grand total with item count
- Cart persisted to `localStorage` via signal `effect()`

**Tab 2 — Contact Us**
- Reactive Form — fully typed with `FormBuilder`
- Validation: required, minLength, email pattern, Indian phone pattern
- Inline error messages — show only on dirty/touched
- Character counter on message field
- Success state after submit with option to send another

---


## Assumptions & Implementation Notes

Angular 19 supports experimental zoneless change detection — this application is built fully zoneless.

For a small application with only two pages, signal-based services are used for state management. Introducing NgRx Store would be overkill for this scope. However, NgRx can be added later as the application grows and new features are introduced.

---

## Best Practices

- Zoneless change detection is enabled using `provideExperimentalZonelessChangeDetection()`, with state managed via signals.
- API calls are handled using `rxResource`, which provides built-in support for loading, error, and value states.
- All components are standalone.
- Strict TypeScript is used throughout the project.

---

## Component Design & Code Structure

- Dumb components are used to improve reusability and maintain a clear separation of concerns.

---

## State Management Approach

- Signals are used for state management inside services.
- `rxResource` is used for handling async operations with automatic management of loading, error, and value states.

---

## UI Responsiveness & Usability

- The UI is fully responsive across devices.
- Reusable UI components such as toast notifications, loading spinners, and empty states are implemented for consistent usage across the application.

---

## Code Readability & Maintainability

- Hardcoded strings are avoided.
- All UI text labels, error messages, and toast messages are managed through centralized constants files.
