import { Component, input, output } from '@angular/core';
import { LucideAngularModule, PackageOpen } from 'lucide-angular';

@Component({
  selector: 'app-empty-state',
  imports: [LucideAngularModule],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {
  readonly PackageOpenIcon = PackageOpen;
  title = input<string>('Nothing here');
  message = input<string>('');
  actionLabel = input<string>('');

  actionClick = output<void>();
}
