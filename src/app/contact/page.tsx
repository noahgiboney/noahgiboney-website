'use client';

import { type FormEvent, type ReactNode, useRef, useState } from 'react';

import SocialLinks from '../components/social-links/social-links';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

interface SubmissionState {
  isSubmitting: boolean;
  statusMessage: string | null;
  statusType: 'success' | 'error' | null;
}

const serviceID = 'service_7w8yfx9';
const templateID = 'template_hv656kl';
const publicKey = '2Pg_QENVYuxD8e3ur';

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

const initialSubmissionState: SubmissionState = {
  isSubmitting: false,
  statusMessage: null,
  statusType: null,
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>(
    initialSubmissionState
  );

  function updateField<K extends keyof ContactFormData>(
    fieldName: K,
    value: ContactFormData[K]
  ) {
    setFormData((currentValue) => ({
      ...currentValue,
      [fieldName]: value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: undefined,
    }));
  }

  function validateForm(values: ContactFormData): ContactFormErrors {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please include a message.';
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmissionState({
        isSubmitting: false,
        statusMessage: 'Please fix the highlighted fields and try again.',
        statusType: 'error',
      });
      return;
    }

    if (!formRef.current) {
      setSubmissionState({
        isSubmitting: false,
        statusMessage: 'The contact form is unavailable right now.',
        statusType: 'error',
      });
      return;
    }

    setSubmissionState({
      isSubmitting: true,
      statusMessage: null,
      statusType: null,
    });

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, {
        publicKey,
      });

      setFormData(initialFormState);
      setErrors({});
      setSubmissionState({
        isSubmitting: false,
        statusMessage: 'Message sent. I will get back to you soon.',
        statusType: 'success',
      });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmissionState({
        isSubmitting: false,
        statusMessage: 'Unable to send your message. Please try again later.',
        statusType: 'error',
      });
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl px-nmg-4 py-nmg-6 sm:px-nmg-5 sm:py-20">
      <p className="nmg-eyebrow">Get in touch</p>
      <h1 className="mt-nmg-2 font-display text-[30px] font-bold tracking-h1 text-ink sm:text-[38px] sm:tracking-display">
        Contact
      </h1>
      <p className="nmg-prose mt-nmg-2">
        Have a question, an idea, or just want to say hello? Send me a note.
      </p>

      <form
        ref={formRef}
        className="mt-nmg-5 flex flex-col gap-nmg-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="name"
            name="name"
            value={formData.name}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onChange={(e) => {
              updateField('name', e.target.value);
            }}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={(e) => {
              updateField('email', e.target.value);
            }}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="What is on your mind?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            onChange={(e) => {
              updateField('message', e.target.value);
            }}
          />
        </Field>

        <div className="mt-nmg-1 flex flex-col items-start gap-nmg-2">
          <button
            type="submit"
            disabled={submissionState.isSubmitting}
            className="nmg-button nmg-button-primary"
          >
            {submissionState.isSubmitting ? 'Sending…' : 'Send message'}
          </button>

          {submissionState.statusMessage ? (
            <p
              role={submissionState.statusType === 'error' ? 'alert' : 'status'}
              className={
                submissionState.statusType === 'error'
                  ? 'text-[15px] text-destructive'
                  : 'text-[15px] text-mint-deep'
              }
            >
              {submissionState.statusMessage}
            </p>
          ) : null}
        </div>
      </form>

      <div className="mt-nmg-6 border-t border-[color:var(--hairline)] pt-nmg-4">
        <p className="nmg-eyebrow mb-nmg-2">Elsewhere</p>
        <SocialLinks hideContactLink />
      </div>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-nmg-1">
      <label
        htmlFor={id}
        className="nmg-label text-[10px] uppercase text-ink-muted"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-[15px] text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
