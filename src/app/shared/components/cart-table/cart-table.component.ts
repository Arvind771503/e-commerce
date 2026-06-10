import { Component, input, output } from '@angular/core';
import {
  LucideAngularModule,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
} from 'lucide-angular';
import { CartItem } from '../../../core/models/cart-item.model';
import {
  BTN_LABELS,
  CART_TABLE_HEADERS,
  STATUS_TEXT,
  EMPTY_STATES,
} from '../../../core/constants/ui.constants';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-cart-table',
  imports: [LucideAngularModule, EmptyStateComponent],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent {
  readonly items = input.required<CartItem[]>();
  readonly grandTotal = input.required<number>();
  readonly totalItems = input.required<number>();

  readonly increase = output<number>();
  readonly decrease = output<number>();
  readonly remove = output<number>();
  readonly clear = output<void>();
  readonly browseClick = output<void>();

  readonly TrashIcon = Trash2;
  readonly PlusIcon = Plus;
  readonly MinusIcon = Minus;
  readonly ArrowIcon = ArrowRight;

  readonly headers = CART_TABLE_HEADERS;
  readonly clearCartLabel = BTN_LABELS.CLEAR_CART;
  readonly checkoutLabel = BTN_LABELS.CHECKOUT;
  readonly browseLabel = BTN_LABELS.BROWSE_PRODUCTS;
  readonly removeLabel = BTN_LABELS.REMOVE;
  readonly grandTotalLabel = STATUS_TEXT.GRAND_TOTAL_LABEL;
  readonly emptyTitle = EMPTY_STATES.CART.TITLE;
  readonly emptyMessage = EMPTY_STATES.CART.MESSAGE;

  itemsCountLabel(): string {
    return STATUS_TEXT.ITEMS_COUNT(this.totalItems());
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'assets/products-img/noimage.png';
  }
}