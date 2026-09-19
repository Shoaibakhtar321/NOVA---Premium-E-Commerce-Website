import { ArrowLeft, ArrowRight, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Error Code */}
          <p className="text-[120px] font-semibold leading-none tracking-[-0.08em] text-neutral-100 sm:text-[180px]">
            404
          </p>

          {/* Content */}
          <div className="-mt-4 relative sm:-mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Page not found
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Looks like you took a wrong turn.
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500 sm:text-base">
              The page you're looking for doesn't exist or may have been moved.
              Let's get you back to something you'll love.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="flex h-11 items-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                <ArrowLeft size={16} />
                Back to home
              </a>

              <a
                href="/shop"
                className="flex h-11 items-center gap-2 rounded-full border border-neutral-200 px-6 text-sm font-medium text-neutral-900 transition hover:border-neutral-950"
              >
                Explore shop
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
