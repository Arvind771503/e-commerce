
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';  // ← RouterOutlet added
import { LucideAngularModule, ShoppingCart, Mail } from 'lucide-angular';
import { CartService } from '../../core/services/cart.service';
import { TAB_LABELS, PAGE_TITLES, PAGE_SUBTITLES } from '../../core/constants/ui.constants';

@Component({
  selector: 'app-cart-contact',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, LucideAngularModule],
  templateUrl: './cart-contact.component.html',
  styleUrl: './cart-contact.component.css'
})
export class CartContactComponent {
  readonly cartState    = inject(CartService);
  readonly CartIcon     = ShoppingCart;
  readonly MailIcon     = Mail;
  readonly tabLabels    = TAB_LABELS;
  readonly pageTitles   = PAGE_TITLES;
  readonly pageSubtitles = PAGE_SUBTITLES;

}
