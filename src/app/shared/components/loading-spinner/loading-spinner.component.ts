import { Component, input } from '@angular/core';
import { STATUS_TEXT } from '../../../core/constants/ui.constants';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  loadingText = input<string>(STATUS_TEXT.LOADING);
}
