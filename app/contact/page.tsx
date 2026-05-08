"use client";

import { useState } from "react";
import {
  FaCircleCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaTriangleExclamation,
  FaWhatsapp,
} from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { site, whatsappHref } from "@/lib/site";

export default function ContactPage() {
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
    <>
      <section className="bg-linear-to-br from-primary-900 to-primary-700 px-6 py-20 text-center text-white sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <h1 className="mb-4 text-4xl font-normal md:text-5xl">Contact &amp; book</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Request a free quotation, send site photos, or book a visit. We aim to reply within one hour
            during business hours across {site.areas}.
          </p>
        </Reveal>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-normal text-brand-navy">Get in touch</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-4">
                <FaPhone className="mt-0.5 h-6 w-6 shrink-0 text-primary-700" aria-hidden />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={site.phoneTel} className="text-primary-700 hover:underline">
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-0.5 text-xs text-gray-500">Emergency plumbing — call anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaWhatsapp className="mt-0.5 h-6 w-6 shrink-0 text-[#25D366]" aria-hidden />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">
                    Message {site.brand}
                  </a>
                  <p className="mt-0.5 text-xs text-gray-500">Photos welcome for faster estimates</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="mt-0.5 h-6 w-6 shrink-0 text-primary-700" aria-hidden />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${site.email}`} className="text-primary-700 hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaLocationDot className="mt-0.5 h-6 w-6 shrink-0 text-primary-700" aria-hidden />
                <div>
                  <p className="font-semibold">Service areas</p>
                  <p>{site.areas}</p>
                  <p className="mt-0.5 text-xs text-gray-500">Sun–Thu 8am–7pm · Fri 9am–2pm · Sat by appointment</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <p className="mb-1 flex items-center gap-2 font-normal text-brand-navy">
                <FaTriangleExclamation className="h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                Active leak or flooding?
              </p>
              <p className="text-sm text-gray-700">
                Call or WhatsApp immediately — we prioritise water shut-off and temporary repairs, then
                schedule the full fix.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={site.phoneTel}
                  className="inline-block rounded-lg bg-primary-700 px-5 py-2 text-sm font-normal text-white transition-colors hover:bg-primary-600"
                >
                  Call now
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-primary-700 px-5 py-2 text-sm font-normal text-brand-navy transition-colors hover:bg-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-normal text-brand-navy">Submit request</h2>
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mb-4 flex justify-center text-green-700">
                  <FaCircleCheck className="h-12 w-12" aria-hidden />
                </div>
                <h3 className="mb-2 text-xl font-normal text-green-800">Request received</h3>
                <p className="text-sm text-green-700">
                  Thank you, {form.name}. Our coordinator will contact you shortly on the number or email
                  you provided.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", location: "", service: "", message: "" });
                  }}
                  className="mt-5 text-sm text-primary-700 hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Area / community</label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. JVC, Dubai Marina, Sharjah"
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Service type *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                  <label className="mb-1 block text-sm font-medium text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the work, preferred dates, and access notes…"
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary-700 py-3 text-sm font-normal text-white transition-colors hover:bg-primary-600"
                >
                  Submit request
                </button>
                <p className="text-center text-xs text-gray-500">
                  For photos, you can attach them on WhatsApp — we never share your details with third
                  parties.
                </p>
              </form>
            )}
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
