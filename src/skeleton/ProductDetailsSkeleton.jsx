const ProductDetailsSkeleton = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="mb-8 flex items-center gap-2 text-xs text-neutral-400">
          <span className="skeleton h-3 w-10 rounded-md" />
          <span className="h-3 w-3 rounded-full bg-neutral-200" />
          <span className="skeleton h-3 w-14 rounded-md" />
          <span className="h-3 w-3 rounded-full bg-neutral-200" />
          <span className="skeleton h-3 w-20 rounded-md" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <section className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 overflow-x-auto md:w-24 md:flex-col">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`skeleton h-24 w-20 shrink-0 rounded-xl md:w-full ${
                    index === 0 ? "md:h-24" : "md:h-20"
                  }`}
                />
              ))}
            </div>

            <div className="skeleton relative aspect-[4/5] flex-1 overflow-hidden rounded-[28px]" />
          </section>

          <section className="flex flex-col py-1">
            <div className="skeleton h-3 w-20 rounded-md" />

            <div className="mt-3 skeleton h-10 w-full max-w-xs rounded-md" />

            <div className="mt-4 flex items-center gap-3">
              <div className="skeleton h-4 w-16 rounded-md" />
              <span className="h-4 w-px bg-neutral-200" />
              <div className="skeleton h-4 w-20 rounded-md" />
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="skeleton h-8 w-28 rounded-md" />
            </div>

            <div className="mt-6 space-y-2">
              <div className="skeleton h-4 w-full rounded-md" />
              <div className="skeleton h-4 w-full rounded-md" />
              <div className="skeleton h-4 w-4/5 rounded-md" />
            </div>

            <div className="my-7 h-px bg-neutral-100" />

            <div className="mt-7 flex gap-3">
              <div className="skeleton h-14 w-36 rounded-xl" />
              <div className="skeleton h-14 flex-1 rounded-xl" />
            </div>

            <div className="mt-3 skeleton h-14 w-full rounded-xl" />

            <div className="mt-8 grid grid-cols-3 border-y border-neutral-100 py-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-2 text-center ${
                    index < 2 ? "border-r border-neutral-100" : ""
                  }`}
                >
                  <span className="skeleton h-6 w-6 rounded-md" />
                  <span className="skeleton h-3 w-16 rounded-md" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 inline-flex items-center gap-2">
          <span className="skeleton h-4 w-4 rounded-full" />
          <span className="skeleton h-4 w-28 rounded-md" />
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsSkeleton;
