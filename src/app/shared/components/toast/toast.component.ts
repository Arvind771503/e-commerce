import { Component, inject } from '@angular/core';
import {
  LucideAngularModule,
  CircleCheckBig,
  CircleX,
  Info,
  X,
} from 'lucide-angular';
import { UiService, ToastType } from '../../../core/services/ui.service';
import { BTN_LABELS } from '../../../core/constants/ui.constants';

@Component({
  selector: 'app-toast',
  imports: [LucideAngularModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  readonly ui = inject(UiService);
  
  readonly CloseIcon = X;
  readonly dismissLabel = BTN_LABELS.DISMISS;

  iconFor(type: ToastType) {
    return type === 'success' ? CircleCheckBig : type === 'error' ? CircleX : Info;
  }

  accentClass(type: ToastType): string {
    const map: Record<ToastType, string> = {
      success: 'border-l-4 border-l-success',
      error: 'border-l-4 border-l-error',
      info: 'border-l-4 border-l-primary-500',
    };
    return map[type];
  }

  iconClass(type: ToastType): string {
    const map: Record<ToastType, string> = {
      success: 'text-success',
      error: 'text-error',
      info: 'text-primary-500',
    };
    return map[type];
  }
}