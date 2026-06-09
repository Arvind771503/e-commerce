import { inject, Injectable, signal, computed, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { UiService } from './ui.service';
import { STORAGE_KEYS } from '../constants/app.constants';
import { TOAST_MESSAGES } from '../constants/ui.constants';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ui = inject(UiService);

  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly grandTotal = computed(() =>
    this._items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  readonly isEmpty = computed(() => this._items().length === 0);

  constructor() {
    this.loadFromStorage();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(this._items()));
      }
    });
  }

  // Add to cart
  addToCart(product: Product): void {
    this._items.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, quantity: 1 }];
    });

    this.ui.showToast(TOAST_MESSAGES.ITEM_ADDED(product.name), 'success');
  }

  // Remove to cart
  removeFromCart(productId: number, productName?: string): void {
    this._items.update((items) =>
      items.filter((item) => item.product.id !== productId)
    );

    const msg = productName
      ? TOAST_MESSAGES.ITEM_REMOVED_NAMED(productName)
      : TOAST_MESSAGES.ITEM_REMOVED;
    this.ui.showToast(msg, 'info');
  }

  // Update to quantity
  updateQuantity(productId: number, delta: number): void {
    this._items.update((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  clearCart(): void {
    this._items.set([]);
    this.ui.showToast(TOAST_MESSAGES.CART_CLEARED, 'info');
  }

  isInCart(productId: number): boolean {
    return this._items().some((item) => item.product.id === productId);
  }

  // Get storage item from localstorage 
  private loadFromStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CART);
      if (stored) {
        this._items.set(JSON.parse(stored) as CartItem[]);
      }
    } catch {
      this._items.set([]);
    }
  }
}
