export const VALIDATION_RULES = {
  MESSAGE_MIN_LENGTH: 20,
  NAME_MIN_LENGTH: 2,
  PHONE_PATTERN: /^[6-9]\d{9}$/,
} as const;

export const VALIDATION_MESSAGES = {
  name: {
    required: 'Full name is required.',
    minlength: `Name must be at least ${VALIDATION_RULES.NAME_MIN_LENGTH} characters.`,
  },
  email: {
    required: 'Email address is required.',
    email: 'Please enter a valid email address.',
  },
  phone: {
    required: 'Phone number is required.',
    pattern: 'Enter a valid 10-digit Indian mobile number.',
  },
  message: {
    required: 'Message is required.',
    minlength: `Message must be at least ${VALIDATION_RULES.MESSAGE_MIN_LENGTH} characters.`,
  },
} as const;
