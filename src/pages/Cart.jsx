import { Minus, Plus, Trash2, ArrowLeft, ShieldCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeToCart } from "../redux/cartSlice";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const subtotal = cart.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const shipping = subtotal >= 150 ? 0 : 8;
  const total = (subtotal + shipping).toFixed(2);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            <span>Shopping Bag</span>
            <span className="h-px w-5 bg-neutral-300" />
            <span>{cart.cart.length} Items</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Your cart
          </h1>

          <p className="mt-3 text-sm text-neutral-500">
            Review your items before completing your purchase.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          {cart.cart.length < 1 ? (
            <div className=" flex gap-5 items-center justify-center text-[10px] font-semibold text-neutral-400">
              <ShoppingBag size={50} strokeWidth={1.8} />
              <p className="text-lg text-neutral-500">
                You don't have anything in your cart.
              </p>
            </div>
          ) : (
            <section>
              <div className="hidden grid-cols-[1fr_120px_100px] border-b border-neutral-200 pb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400 sm:grid">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>

              <div className="divide-y divide-neutral-200">
                {cart.cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid gap-5 py-6 sm:grid-cols-[1fr_120px_100px] sm:items-center"
                  >
                    {/* Product */}
                    <div className="flex gap-5">
                      <div className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-32 sm:w-28">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex min-w-0 flex-col justify-center">
                        <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                          {item.category}
                        </span>

                        <h2 className="text-sm font-medium text-neutral-950 sm:text-base">
                          {item.title}
                        </h2>

                        <p className="mt-2 text-sm font-semibold text-neutral-950">
                          ${item.price}
                        </p>

                        <button
                          className="mt-3 flex w-fit items-center gap-1.5 text-xs text-neutral-400 transition hover:text-red-500"
                          onClick={() => {
                            toast.warning("Item has been removed");
                            dispatch(removeToCart(item.id));
                          }}
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center sm:justify-center">
                      <div className="flex h-10 items-center rounded-full border border-neutral-200 bg-white">
                        <button
                          aria-label="Decrease quantity"
                          className="flex h-10 w-10 items-center justify-center text-neutral-500 transition hover:text-black"
                          onClick={() => dispatch(decreaseQty(item.id))}
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-7 text-center text-sm font-medium">
                          {item.qty}
                        </span>

                        <button
                          aria-label="Increase quantity"
                          className="flex h-10 w-10 items-center justify-center text-neutral-500 transition hover:text-black"
                          onClick={() => {
                            dispatch(increaseQty(item.id));
                          }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="text-left sm:text-right">
                      <span className="text-sm font-semibold text-neutral-950">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <a
                href="/shop"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-black"
              >
                <ArrowLeft size={16} />
                Continue shopping
              </a>
            </section>
          )}

          {/* Order Summary */}
          <aside className="h-fit rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950">
              Order summary
            </h2>

            <div className="mt-7 space-y-4 border-b border-neutral-100 pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="font-medium text-neutral-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Shipping</span>
                <span className="font-medium text-neutral-900">
                  {shipping === 0 ? "Free" : `$${shipping}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="rounded-xl bg-neutral-50 px-3 py-2 text-xs leading-5 text-neutral-500">
                  Add ${(150 - subtotal).toFixed(0)} more to unlock free
                  shipping.
                </p>
              )}
            </div>

            {/* Promo */}
            {/* Discount code feature will be added soon... */}
            {/* <div className="py-6">
              <label
                htmlFor="promo"
                className="mb-2 block text-xs font-medium text-neutral-700"
              >
                Promo code
              </label>

              <div className="flex rounded-xl border border-neutral-200 p-1 focus-within:border-neutral-950">
                <input
                  id="promo"
                  type="text"
                  placeholder="Enter code"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-neutral-400"
                />

                <button className="rounded-lg bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-neutral-200">
                  Apply
                </button>
              </div>
            </div> */}

            {/* Total */}
            <div className="flex items-end justify-between border-t border-neutral-100 pt-5">
              <div>
                <p className="text-xs text-neutral-500">Total</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
                  ${total}
                </p>
              </div>

              <span className="pb-1 text-xs text-neutral-900">USD</span>
            </div>

            {/* Checkout */}
            <button
              className="mt-6 cursor-pointer active:scale-95 flex w-full items-center justify-center rounded-xl bg-neutral-950 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
              onClick={() => toast.success("Your order has been placed")}
            >
              Proceed to checkout
            </button>

            {/* Trust */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-400">
              <ShieldCheck size={15} />
              <span>Secure & encrypted checkout</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
