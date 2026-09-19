const CategoriesSkeleton = () => {
  const skeletons = Array.from({ length: 8 });

  return (
    <main className="min-h-screen bg-white">
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="flex min-h-36 items-end justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div>
              {/* Number */}
              <div className="h-3 w-5 animate-pulse rounded bg-neutral-200" />

              {/* Category Name */}
              <div className="mt-3 h-6 w-32 animate-pulse rounded bg-neutral-200" />
            </div>

            {/* Arrow */}
            <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-200" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoriesSkeleton;
