import { Component, inject } from '@angular/core';
import { LucideAngularModule, Search, SlidersHorizontal, X } from 'lucide-angular';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/constants/app.constants';
import {
  PAGE_TITLES,
  PAGE_SUBTITLES,
  STATUS_TEXT,
  EMPTY_STATES,
  FORM_PLACEHOLDERS,
  BTN_LABELS,
} from '../../core/constants/ui.constants';
import { CardComponent } from '../../shared/components/card/card.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-products',
  imports: [
    LucideAngularModule,
    CardComponent,
    LoadingSpinnerComponent,
    EmptyStateComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  readonly productService = inject(ProductService);
  readonly cartService    = inject(CartService);

  readonly SearchIcon = Search;
  readonly XIcon      = X;
  readonly FilterIcon = SlidersHorizontal;

  readonly pageTitle         = PAGE_TITLES.PRODUCTS;
  readonly pageSubtitle      = PAGE_SUBTITLES.PRODUCTS;
  readonly searchPlaceholder = FORM_PLACEHOLDERS.SEARCH;
  readonly clearFiltersLabel = BTN_LABELS.CLEAR_FILTERS;
  readonly retryLabel        = BTN_LABELS.RETRY;
  readonly loadFailedLabel   = STATUS_TEXT.LOAD_FAILED;
  readonly emptyTitle        = EMPTY_STATES.PRODUCTS.TITLE;
  readonly emptyMessage      = EMPTY_STATES.PRODUCTS.MESSAGE;

  onSearch(event: Event): void {
    this.productService.search((event.target as HTMLInputElement).value);
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  onRemoveFromCart(productId: number): void {
    const product = this.productService
      .products()
      .find((p) => p.id === productId);
    this.cartService.removeFromCart(productId, product?.name);
  }

  showingText(): string {
    return STATUS_TEXT.SHOWING(
      this.productService.filteredProducts().length,
      this.productService.products().length
    );
  }

  forQueryText(): string {
    return STATUS_TEXT.SHOWING_FOR(this.productService.searchQuery());
  }

  categoryBtnClass(cat: Category): string {
    return this.productService.selectedCategory() === cat
      ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
      : 'bg-white text-neutral-600 border-border hover:border-primary-300 hover:text-primary-600';
  }
}