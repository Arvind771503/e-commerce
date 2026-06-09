import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '../models/product.model';
import { Category, CATEGORIES } from '../constants/app.constants';
import { STATUS_TEXT } from '../constants/ui.constants';
import { delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);

  readonly searchQuery = signal<string>('');
  readonly selectedCategory = signal<Category>('All');
  readonly categories = signal<Category[]>([...CATEGORIES]);

  // Fetching products.
  private readonly productsResource = rxResource({
    loader: () => this.http.get<Product[]>('assets/data/products.json').pipe(delay(500)) ,
  });

  readonly products = computed(() => this.productsResource.value() ?? []);
  readonly loading = this.productsResource.isLoading;
  readonly error = computed(() => 
    this.productsResource.error() ? STATUS_TEXT.LOAD_FAILED_MSG : null
  );

  // Computed State
  readonly filteredProducts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategory();
    const allProducts = this.products();

    return allProducts.filter((p) => {
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);

      const matchesCategory = category === 'All' || p.category === category;

      return matchesSearch && matchesCategory;
    });
  });

  // State Mutating Actions
  retryLoad(): void {
    this.productsResource.reload();
  }

  search(query: string): void {
    this.searchQuery.set(query);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  filterByCategory(category: Category): void {
    this.selectedCategory.set(category);
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('All');
  }
}