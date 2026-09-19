import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Heart } from "lucide-react";

const Wishlist = () => {
  const items = useSelector((state) => state.wishlistSlice.wishlist);
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
              YOUR WISHLIST
            </span>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Your favorites, saved
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Keep the pieces you love close and come back to them whenever
              you're ready.
            </p>
          </div>

          {/* Product count */}
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
            <span>{items?.length} products</span>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-5 grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-5 pb-20 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {items?.length > 0 ? (
          items.map((item, idx) => <ProductCard key={idx} data={item} />)
        ) : (
          <div className="col-span-full flex min-h-[300px] items-center justify-center">
            <p className="text-lg text-neutral-500 flex gap-5 justify-center items-center">
              <Heart size={30}/>
              You don't have anything in your wishlist.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
