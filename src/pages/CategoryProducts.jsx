import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { specificCategory } from "../api/product";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { slug } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const products = async () => {
      const response = await specificCategory(slug);
      setItems(response.products);
      setLoading(false);
    };
    products();
  }, []);

  const categoryName = slug.replaceAll("-", " ");
  const navigate = useNavigate();

  return (
    <div className="">
      <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8 lg:pt-20">
        <button
          onClick={() => navigate(-1)}
          className="pb-3 hidden items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-900 sm:flex hover:cursor-pointer group"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.8}
            className="transition-transform group-hover:-translate-x-1"
          />
          Go Back
        </button>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Heading */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Curated for you
            </span>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl capitalize">
              Shop our <span className="text-red-500">{categoryName}</span>{" "}
              collection
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Discover thoughtfully selected pieces designed to elevate your
              everyday style.
            </p>
          </div>

          {/* Product count */}
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
            <span>{items.length} products</span>
          </div>
        </div>
      </section>
      <section className="mt-5 mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-5 pb-20 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {loading &&
          [1, 2, 3, 4, 5, 6].map((val) => <ProductCardSkeleton key={val} />)}
        {items.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </section>
    </div>
  );
};

export default CategoryProducts;
