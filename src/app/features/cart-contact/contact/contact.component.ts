import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  LucideAngularModule,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CircleCheckBig,
} from 'lucide-angular';
import { UiService } from '../../../core/services/ui.service';
import {
  VALIDATION_RULES,
  VALIDATION_MESSAGES,
} from '../../../core/constants/validation.constants';
import {
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  BTN_LABELS,
  STATUS_TEXT,
  CONTACT_SUCCESS,
  TOAST_MESSAGES,
} from '../../../core/constants/ui.constants';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly ui = inject(UiService);

  readonly UserIcon = User;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MsgIcon = MessageSquare;
  readonly SendIcon = Send;
  readonly CheckIcon = CircleCheckBig;

  readonly labels = FORM_LABELS;
  readonly placeholders = FORM_PLACEHOLDERS;
  readonly messages = VALIDATION_MESSAGES;
  readonly minMsgLength = VALIDATION_RULES.MESSAGE_MIN_LENGTH;
  readonly sendLabel = BTN_LABELS.SEND_MESSAGE;
  readonly sendAnotherLabel = BTN_LABELS.SEND_ANOTHER;
  readonly requiredMark = FORM_LABELS.REQUIRED_MARK;
  readonly requiredNote = STATUS_TEXT.REQUIRED_FIELDS_NOTE;
  readonly successHeading = CONTACT_SUCCESS.HEADING;
  readonly successSubtext = CONTACT_SUCCESS.SUBTEXT;

  submitted = signal(false);

  // Form
  form = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(VALIDATION_RULES.NAME_MIN_LENGTH),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(VALIDATION_RULES.PHONE_PATTERN),
      ],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(VALIDATION_RULES.MESSAGE_MIN_LENGTH),
      ],
    ],
  });

  showError(field: string, error: string): boolean {
    const ctrl = this.form.get(field);
    return !!(
      ctrl?.invalid &&
      ctrl.hasError(error) &&
      (ctrl.dirty || ctrl.touched)
    );
  }

  fieldClass(field: string): string {
    const ctrl = this.form.get(field);
    if (!ctrl || (!ctrl.dirty && !ctrl.touched)) return 'border-border';
    return ctrl.invalid
      ? 'border-error/50 bg-error-light/30'
      : 'border-success/50';
  }

  charCountText(): string {
    return STATUS_TEXT.CHAR_COUNT(
      this.form.get('message')?.value?.length ?? 0,
      this.minMsgLength
    );
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.submitted.set(true);
    this.ui.showToast(TOAST_MESSAGES.CONTACT_SUCCESS, 'success');
  }

  resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
  }
}
