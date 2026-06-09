import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, ShoppingBag, ShoppingCart, Menu, X } from 'lucide-angular';
import { APP_META, NAV_LABELS } from '../../../core/constants/ui.constants';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount = input<number>(0);

  readonly appName = APP_META.NAME;
  readonly labels = NAV_LABELS;
  readonly ShoppingBagIcon = ShoppingBag;
  readonly CartIcon = ShoppingCart;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
