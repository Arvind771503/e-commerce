import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { CartTableComponent } from '../../../shared/components/cart-table/cart-table.component';

@Component({
  selector: 'app-cart',
  imports: [CartTableComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  goToProducts(): void {
    this.router.navigate(['/']);
  }
}
