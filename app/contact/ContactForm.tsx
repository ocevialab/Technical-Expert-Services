"use client";

import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const fieldClass =
  "w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-neutral-500 focus:border-brand-asset focus:outline-none focus:ring-2 focus:ring-brand-asset/25";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-primary-100 bg-white/90 p-6 shadow-card sm:p-8">
      <h2 className="mb-6 text-2xl font-normal text-brand-navy">Inquiry form</h2>
      {submitted ? (
        <div className="rounded-2xl border border-green-200 bg-green-50/90 p-8 text-center">
          <div className="mb-4 flex justify-center text-green-700">
            <FaCircleCheck className="h-12 w-12" aria-hidden />
          </div>
          <h3 className="mb-2 text-xl font-normal text-green-800">Request received</h3>
          <p className="text-sm text-green-800/90">
            Thank you, {form.name}. Our coordinator will contact you shortly on the number or email you
            provided.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", phone: "", location: "", service: "", message: "" });
            }}
            className="mt-5 text-sm font-medium text-brand-asset hover:underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-brand-navy">
              Name *
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={fieldClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-brand-navy">
                Phone *
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-brand-navy">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-location" className="mb-1 block text-sm font-medium text-brand-navy">
              Area / community
            </label>
            <input
              id="contact-location"
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. JVC, Dubai Marina, Sharjah"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-service" className="mb-1 block text-sm font-medium text-brand-navy">
              Service type *
            </label>
            <select
              id="contact-service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={fieldClass}
            >
              <option value="">Select…</option>
              <option>Painting service</option>
              <option>Plumbing service</option>
              <option>Emergency repair</option>
              <option>Maintenance work</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-brand-navy">
              Message *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the work, preferred dates, and access notes…"
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-asset py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Submit inquiry
          </button>
          <p className="text-center text-xs text-neutral-600">
            For photos, you can attach them on WhatsApp — we never share your details with third parties.
          </p>
        </form>
      )}
    </div>
  );
}
