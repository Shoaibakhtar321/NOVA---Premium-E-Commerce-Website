import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { category, specificCategory } from "../api/product";
import { Link, useNavigate } from "react-router-dom";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await category();
      setLoading(false);
      setCategories(response);
    };

    fetchCategories();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Browse
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            All Categories
          </h1>

          <p className="mt-4 text-sm leading-6 text-neutral-500 sm:text-base">
            Explore our product categories and find exactly what you're looking
            for.
          </p>
        </div>

        {/* Categories */}
        {loading ? (
          <CategoriesSkeleton />
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/categories/${category.slug}`}
                className="group flex min-h-36 items-end justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100"
              >
                <div>
                  <span className="text-xs font-medium text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-2 text-xl font-medium tracking-tight text-neutral-950">
                    {category.name}
                  </h2>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Categories;
