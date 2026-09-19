import React from 'react'

const ProductCardSkeleton = () => {
  return (
    <article className="relative">
      {/* Product Image */}
      <div className="relative aspect-[4/5] animate-pulse overflow-hidden rounded-2xl bg-neutral-100">
        {/* Badge */}
        <div className="absolute left-4 top-4 h-7 w-12 rounded-full bg-neutral-200" />

        {/* Wishlist */}
        <div className="absolute right-4 top-4 h-9 w-9 rounded-full bg-neutral-200" />

        {/* Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 h-12 rounded-xl bg-neutral-200" />
      </div>

      {/* Product Details */}
      <div className="pt-4">
        {/* Category */}
        <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />

        <div className="mt-2 flex items-start justify-between gap-3">
          {/* Product Name */}
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-4 w-[85%] animate-pulse rounded bg-neutral-200" />
            <div className="h-4 w-[60%] animate-pulse rounded bg-neutral-200" />
          </div>

          {/* Price */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="h-4 w-10 animate-pulse rounded bg-neutral-200" />
            <div className="h-3 w-8 animate-pulse rounded bg-neutral-100" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;

