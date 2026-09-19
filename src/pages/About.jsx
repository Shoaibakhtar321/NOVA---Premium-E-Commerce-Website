import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import firstIMG from "../assets/AboutImage.png";
import aboutHero from "../assets/about.jpeg";
import { useContext } from "react";
import { NavTab } from "../context/Provider";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Sparkles,
    title: "Curated with purpose",
    description:
      "We carefully select products that combine quality, functionality, and timeless design.",
  },
  {
    icon: ShieldCheck,
    title: "Quality first",
    description:
      "Every product is chosen with attention to materials, craftsmanship, and everyday usability.",
  },
  {
    icon: Heart,
    title: "Customer focused",
    description:
      "From discovering a product to receiving your order, we aim to make every interaction simple.",
  },
  {
    icon: Leaf,
    title: "Thoughtful choices",
    description:
      "We believe in buying better, choosing products that are useful, durable, and made to be enjoyed.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality products",
    description: "Carefully selected products you can feel good about buying.",
  },
  {
    icon: Truck,
    title: "Reliable delivery",
    description: "Fast and dependable shipping straight to your door.",
  },
  {
    icon: Heart,
    title: "Made for you",
    description: "A shopping experience built around what matters to you.",
  },
  {
    icon: Check,
    title: "Easy shopping",
    description: "Simple browsing, secure checkout, and hassle-free ordering.",
  },
];

const About = () => {
  const { setTab } = useContext(NavTab);

  return (
    <main className="bg-white text-neutral-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              About NOVA
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Thoughtful products.
              <br />
              Simple shopping.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-neutral-500">
              NOVA is a modern online store built around one simple idea:
              shopping should feel effortless. We bring together carefully
              selected products across everyday categories, making it easier to
              discover things you'll genuinely love.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-neutral-100">
          <img
            src={aboutHero}
            alt="NOVA collection"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Our story
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A better way to discover everyday products.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-neutral-500 sm:text-base">
            <p>
              NOVA was created with a straightforward goal: to make online
              shopping more focused, enjoyable, and reliable.
            </p>

            <p>
              With countless products available online, finding something worth
              buying can often feel overwhelming. We believe a great store
              should make that decision easier. That's why we focus on
              thoughtful collections, clean presentation, and products that
              offer real value.
            </p>

            <p>
              From clothing and accessories to footwear, fragrances, beauty,
              electronics, and home essentials, NOVA brings different parts of
              everyday life together in one simple shopping experience.
            </p>

            <p>
              We're continuously improving the way NOVA works, from discovering
              products to completing an order, so every part of the experience
              feels clear and effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            What we believe
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            The principles behind NOVA.
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-500 sm:text-base">
            Everything we do is guided by a few simple principles that keep the
            shopping experience useful, honest, and enjoyable.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-7 lg:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                <Icon size={19} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 text-base font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Split Section */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid overflow-hidden rounded-3xl bg-neutral-950 lg:grid-cols-2">
          <div className="flex min-h-[460px] flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Designed for everyday life
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Less noise. More of what matters.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
              We keep our approach simple. Instead of overwhelming you with
              endless choices, NOVA focuses on making products easy to explore,
              compare, and purchase.
            </p>

            <Link
              to="/categories"
              className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              onClick={() => setTab("categories")}
            >
              Explore our categories
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="min-h-[360px] bg-neutral-800">
            <img
              src={firstIMG}
              alt="NOVA products"
              className="h-full min-h-[360px] w-full object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* Why NOVA */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Why NOVA
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything you need from a modern store.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="border-t border-neutral-200 pt-6">
                  <Icon size={20} strokeWidth={1.7} />

                  <h3 className="mt-5 text-base font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Our mission
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          Make discovering great products feel simple.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
          We want NOVA to be a place where you can discover products with
          confidence, shop without unnecessary friction, and find something that
          fits naturally into your everyday life.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-100 px-6 py-20 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Discover NOVA
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Find something you'll love.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500">
            Explore our latest products and discover carefully selected
            essentials for everyday life.
          </p>

          <Link
            onClick={() => setTab("shop")}
            to="/shop"
            className="mx-auto cursor-pointer active:scale-95 mt-7 flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Shop Now
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
