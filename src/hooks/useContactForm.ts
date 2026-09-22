"use client";

import { useCallback, useState } from "react";

export interface ContactFormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.surname.trim()) errors.surname = "Surname is required.";

  if (!values.email.trim()) {
    errors.email = "E-mail is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid e-mail address.";
  }

  if (!values.message.trim()) errors.message = "Message is required.";

  if (!values.consent) {
    errors.consent = "Please accept the Privacy Policy.";
  }

  return errors;
}

/**
 * Drives the Contact page form: local state, client-side validation and a
 * simulated success state. No network request is made here.
 */
export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const setField = useCallback(
    <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validate(values);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        setStatus("idle");
        return;
      }

      setStatus("submitting");

      // TODO: wire to real form backend/API endpoint
      setStatus("success");
    },
    [values],
  );

  return { values, errors, status, setField, handleSubmit };
}
