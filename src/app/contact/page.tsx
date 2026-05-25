"use client";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import styles from "./contact.module.css";
import { type FormEvent, useRef, useState } from "react";
import SocialLinks from "../components/social-links/social-links";
import MetallicButton from "../components/metallic-button/metallic-button";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const serviceID = "service_7w8yfx9";
const templateID = "template_hv656kl";
const publicKey = "2Pg_QENVYuxD8e3ur";
const initialFormState: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<{
    isSubmitting: boolean;
    statusMessage: string | null;
    statusType: "success" | "error" | null;
  }>({
    isSubmitting: false,
    statusMessage: null,
    statusType: null,
  });

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
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please include a message.";
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
        statusMessage: "Please fix the highlighted fields and try again.",
        statusType: "error",
      });
      return;
    }

    if (!formRef.current) {
      setSubmissionState({
        isSubmitting: false,
        statusMessage: "The contact form is unavailable right now.",
        statusType: "error",
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
        statusMessage: "Message sent successfully.",
        statusType: "success",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmissionState({
        isSubmitting: false,
        statusMessage: "Unable to send your message. Please try again later.",
        statusType: "error",
      });
    }
  }

  return (
    <div className="my-10 flex min-h-screen flex-col items-center space-y-10 mx-[7%] sm:mx-[15%] md:mx-[12%]">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-5xl">Contact</h1>
        <SocialLinks hideContactLink />
      </div>
      <form
        ref={formRef}
        className={`${styles.textFields} metallic-surface rounded-[2rem] px-6 py-8 md:px-10`}
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="name" className="font-medium text-slate-700">Name</label>
        <Input
          id="name"
          name="name"
          className="bg-white"
          value={formData.name}
          placeholder="Name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(e) => {
            updateField("name", e.target.value);
          }}
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="text-sm text-red-600">
            {errors.name}
          </p>
        ) : null}

        <label htmlFor="email" className="font-medium text-slate-700">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          className="bg-white"
          value={formData.email}
          placeholder="Email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(e) => {
            updateField("email", e.target.value);
          }}
        />
        {errors.email ? (
          <p id="email-error" role="alert" className="text-sm text-red-600">
            {errors.email}
          </p>
        ) : null}

        <label htmlFor="message" className="font-medium text-slate-700">Message</label>
        <Textarea
          id="message"
          name="message"
          className="bg-white"
          value={formData.message}
          placeholder="Type your message here "
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => {
            updateField("message", e.target.value);
          }}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}

        {submissionState.statusMessage ? (
          <p
            role={submissionState.statusType === "error" ? "alert" : "status"}
            className={
              submissionState.statusType === "error"
                ? "text-sm text-red-600"
                : "text-sm text-green-700"
            }
          >
            {submissionState.statusMessage}
          </p>
        ) : null}

        <MetallicButton type="submit" disabled={submissionState.isSubmitting}>
          {submissionState.isSubmitting ? "Sending..." : "Send"}
        </MetallicButton>
      </form>
    </div>
  );
}
