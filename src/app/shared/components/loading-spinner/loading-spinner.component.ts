import { Component } from '@angular/core';
import { STATUS_TEXT } from '../../../core/constants/ui.constants';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  readonly loadingText = STATUS_TEXT.LOADING;
}
