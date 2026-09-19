import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useContext } from "react";
import { NavTab } from "../context/Provider";
import { NavLink } from "react-router-dom";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    description: "For general questions and support.",
    value: "hello@nova.com",
    href: "mailto:hello@nova.com",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Speak with our customer support team.",
    value: "+1 (800) 123-4567",
    href: "tel:+18001234567",
  },
  {
    icon: MessageCircle,
    title: "Customer support",
    description: "We're here to help with your order.",
    value: "support@nova.com",
    href: "mailto:support@nova.com",
  },
  {
    icon: MapPin,
    title: "Our location",
    description: "Visit us or send us a message.",
    value: "New York, United States",
    href: "#",
  },
];

const Contact = () => {
  const { setTab } = useContext(NavTab);
  return (
    <main className="bg-white text-neutral-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Contact us
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            We'd love to
            <br />
            hear from you.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Have a question about an order, a product, or anything else? Send us
            a message and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-20">
          {/* Contact Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Get in touch
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Let's start a conversation.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
              Whether you need help with your order or simply want to know more
              about NOVA, we're always happy to help.
            </p>

            <div className="mt-10 space-y-7">
              {contactInfo.map(
                ({ icon: Icon, title, description, value, href }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>

                      <p className="mt-1 text-xs leading-5 text-neutral-500">
                        {description}
                      </p>

                      <a
                        href={href}
                        className="mt-1.5 inline-block text-sm font-medium text-neutral-900 transition hover:text-neutral-500"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-neutral-200 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold tracking-tight">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-neutral-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-neutral-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-neutral-700"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="h-12 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-950 outline-none transition focus:border-neutral-950"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="order">Order support</option>
                  <option value="product">Product question</option>
                  <option value="shipping">Shipping & delivery</option>
                  <option value="returns">Returns & refunds</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-neutral-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Send message
                <ArrowRight size={16} />
              </button>

              <p className="text-center text-xs text-neutral-400">
                We typically respond within 1–2 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ / Help */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Need help?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              We've got you covered.
            </h2>

            <p className="mt-4 text-sm leading-6 text-neutral-500">
              You may find the answer you're looking for in our frequently asked
              questions.
            </p>

            <a
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-950 transition hover:text-neutral-500"
            >
              Visit FAQ
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <div className="flex items-center justify-between py-6">
              <div>
                <h3 className="text-sm font-medium">
                  Want to explore more NOVA?
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Get your need at a single click.
                </p>
              </div>

              <NavLink
                to="/categories"
                className="text-sm font-medium text-neutral-950"
              >
                All categories
              </NavLink>
            </div>

            <div className="flex items-center justify-between py-6">
              <div>
                <h3 className="text-sm font-medium">
                  Want to learn more about NOVA?
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Learn about who we are and what we believe.
                </p>
              </div>

              <a href="/about" className="text-sm font-medium text-neutral-950">
                About us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="rounded-3xl bg-neutral-100 px-6 py-16 text-center sm:px-12">
          <Clock3
            size={22}
            strokeWidth={1.6}
            className="mx-auto text-neutral-500"
          />

          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            We're here when you need us.
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-500">
            Your questions, feedback, and suggestions help us make NOVA better.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
