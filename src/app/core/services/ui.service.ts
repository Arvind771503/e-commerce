import { Injectable, signal } from '@angular/core';
import { TOAST_DURATION_MS } from '../constants/app.constants';

export type ToastType = 'success' | 'error' | 'info';
export type ActiveTab = 'cart' | 'contact';

export interface Toast {
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly _toast = signal<Toast | null>(null);
  private readonly _activeTab = signal<ActiveTab>('cart');
  private _toastTimer: ReturnType<typeof setTimeout> | null = null;

  readonly toast = this._toast.asReadonly();
  readonly activeTab = this._activeTab.asReadonly();

  // Show Toast
  showToast(message: string, type: ToastType = 'success'): void {
    if (this._toastTimer) {
      clearTimeout(this._toastTimer);
    }
    
    this._toast.set({ message, type });
    
    this._toastTimer = setTimeout(() => {
      this._toast.set(null);
    }, TOAST_DURATION_MS);
  }

  dismissToast(): void {
    if (this._toastTimer) {
      clearTimeout(this._toastTimer);
    }
    this._toast.set(null);
  }

  setActiveTab(tab: ActiveTab): void {
    this._activeTab.set(tab);
  }
}