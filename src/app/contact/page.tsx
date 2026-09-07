'use client';

import { type FormEvent, type ReactNode, useRef, useState } from 'react';

import MetallicButton from '../components/metallic-button/metallic-button';
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
    <div className="mx-auto w-full max-w-xl px-6 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
        Have a question, an idea, or just want to say hello? Send me a note.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col gap-6"
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

        <div className="flex flex-wrap items-center gap-4">
          <MetallicButton type="submit" disabled={submissionState.isSubmitting}>
            {submissionState.isSubmitting ? 'Sending…' : 'Send'}
          </MetallicButton>

          {submissionState.statusMessage ? (
            <p
              role={submissionState.statusType === 'error' ? 'alert' : 'status'}
              className={
                submissionState.statusType === 'error'
                  ? 'text-sm text-red-600'
                  : 'text-sm text-emerald-700'
              }
            >
              {submissionState.statusMessage}
            </p>
          ) : null}
        </div>
      </form>

      <div className="mt-12 border-t border-[color:var(--hairline)] pt-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          Elsewhere
        </p>
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
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-zinc-700">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
