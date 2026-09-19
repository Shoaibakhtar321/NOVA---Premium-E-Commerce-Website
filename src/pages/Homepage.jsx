import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useMemo, useState } from "react";
import { category, getProduct } from "../api/product";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import home from "../assets/hero.png";
import left_split from "../assets/left-split.png";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const products = async () => {
      setItems(await getProduct());
      setCategories(await category());
      setLoading(false);
    };
    products();
  }, []);

  const categoryImage = {
    Beauty:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Fragrances:
      "https://plus.unsplash.com/premium_photo-1738860331028-9103e025522d?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Furniture:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Groceries:
      "https://plus.unsplash.com/premium_photo-1683121938935-118d0a16a469?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const selectedCategories = categories.slice(0, 4);
  const normalizedCategories = selectedCategories.map((category) => ({
    ...category,
    image: categoryImage[category.name],
  }));

  const randomProducts = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [items]);

  return (
    <main className="bg-white text-neutral-950">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
        <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-neutral-100 lg:min-h-[620px]">
          <img
            src={home}
            alt="Featured collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="relative flex min-h-[620px] flex-col justify-end p-7 pb-10 sm:p-10 lg:p-14">
            <div className="absolute top-10 md:relative md:top-0 pr-5">
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                The new collection
              </span>

              <h1 className="max-w-lg text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Designed for everyday.
              </h1>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Thoughtfully designed essentials that bring simplicity,
                character, and quality to your everyday life.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                Shop Now
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/categories"
                className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View all Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-neutral-200 border-y border-neutral-200 py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <Truck size={19} strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-600 sm:text-xs">
              Free shipping
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <RotateCcw size={19} strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-600 sm:text-xs">
              Easy returns
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck size={19} strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-600 sm:text-xs">
              Secure payment
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Curated for you
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured products
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
              Discover some of our most loved pieces, selected for their quality
              and timeless design.
            </p>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-medium text-neutral-900 transition hover:text-neutral-500 sm:flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>

      {/* =====================================================
          COLLECTION BANNER
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid overflow-hidden rounded-[30px] bg-neutral-100 md:grid-cols-2">
          {/* Image */}
          <div className="min-h-[400px] md:min-h-[520px]">
            <img
              src={left_split}
              alt="New collection"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              New season
            </span>

            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Less, but better.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
              A refined collection built around clean silhouettes, premium
              materials, and pieces made to last.
            </p>

            <Link
              to="/categories"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Explore categories
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Shop by category
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find your style
            </h2>
          </div>
          <Link
            to="/categories"
            className="hidden items-center gap-2 text-sm font-medium text-neutral-900 transition hover:text-neutral-500 sm:flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {normalizedCategories.map((category) => (
            <Link
              to="/categories"
              key={category.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  {category.name}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-950 opacity-0 transition-all group-hover:opacity-100">
                  <ChevronRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="rounded-[30px] bg-neutral-950 px-6 py-14 text-center sm:px-10 lg:py-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
            Stay connected
          </span>

          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Good things, delivered occasionally.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-400">
            Sign up for new arrivals, exclusive offers, and occasional
            inspiration.
          </p>

          <form className="mx-auto mt-7 flex max-w-md rounded-full bg-white p-1.5">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />

            <button
              type="submit"
              className="cursor-pointer active:scale-95 rounded-full bg-neutral-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                toast.success("You have subscribed... Thank you!");
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
