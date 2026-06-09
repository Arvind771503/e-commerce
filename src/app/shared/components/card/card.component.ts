import { Component, computed, input, output } from '@angular/core';
import {
  LucideAngularModule,
  ShoppingCart,
  Star,
  CircleCheckBig,
} from 'lucide-angular';
import { Product } from '../../../core/models/product.model';
import { BTN_LABELS, STATUS_TEXT, PRODUCT_LABELS } from '../../../core/constants/ui.constants';
import {
  CATEGORY_BADGE_CLASSES,
  DEFAULT_BADGE_CLASS,
} from '../../../core/constants/theme.constants';

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>();
  isInCart = input<boolean>(false);

  addToCart = output<Product>();
  removeFromCart = output<number>();

  readonly CartIcon = ShoppingCart;
  readonly StarIcon = Star;
  readonly CheckIcon = CircleCheckBig;
  readonly addToCartLabel = BTN_LABELS.ADD_TO_CART;
  readonly addedLabel = BTN_LABELS.ADDED;
  readonly outOfStockLabel = STATUS_TEXT.OUT_OF_STOCK;

  inStockLabel = computed(() =>
    STATUS_TEXT.IN_STOCK(this.product().stock)
  );

  categoryBadgeClass(): string {
    return (
      CATEGORY_BADGE_CLASSES[this.product().category] ?? DEFAULT_BADGE_CLASS
    );
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'assets/products-img/noimage.png';
  }
}
