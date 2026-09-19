import { Heart, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeToWishlist } from "../redux/wishlistSlice";
import { toast } from "sonner";
import { useContext } from "react";
import { NavTab } from "../context/Provider";

const ProductCard = ({ data }) => {
  const { title, thumbnail, price, rating, category, id } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setTab } = useContext(NavTab);

  const cart = useSelector((state) => state.cartSlice.cart);

  const checkItem = cart.some((item) => item.id === id);

  const wishlist = useSelector((state) => state.wishlistSlice.wishlist);

  const wishlistItem = wishlist.some((item) => item.id === id);

  function handleWishlist() {
    if (wishlistItem) {
      dispatch(removeToWishlist(id));
      toast.info("Item has been removed from your wishlist");
    } else {
      dispatch(addToWishlist(data));
      toast.success("Item has been saved in your wishlist");
    }
  }
  function addCart() {
    dispatch(addToCart({ title, thumbnail, price, category, qty: 1, id }));
    toast.success("item added successfully");
  }
  function removeCart() {
    dispatch(removeToCart(id));
    toast.warning("Item has been removed");
  }

  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] bg-[#f5f5f3] shadow-lg">
        <img
          src={thumbnail}
          alt={title}
          className="h-full cursor-pointer w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          onClick={() => {
            navigate(`/product/${id}`, { state: data });
            setTab("");
          }}
        />

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className={`absolute cursor-pointer left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full ${wishlistItem ? "text-red-500" : "text-neutral-900"} lg:opacity-0 shadow-lg backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/95 group-hover:opacity-100`}
          onClick={handleWishlist}
        >
          <Heart
            size={18}
            strokeWidth={1.7}
            fill={wishlistItem ? "currentColor" : "none"}
          />
        </button>

        {/* View product */}
        <button
          className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-neutral-950 opacity-0 shadow-lg transition-all duration-300 hover:bg-neutral-950 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => navigate(`/product/${id}`, { state: data })}
        >
          <ArrowUpRight size={19} strokeWidth={1.8} />
        </button>

        {/* Add to cart */}
        {checkItem ? (
          <button
            className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-neutral-800 group-hover:translate-y-0 group-hover:opacity-100 hover:cursor-pointer active:scale-95"
            onClick={removeCart}
          >
            <ShoppingBag size={15} strokeWidth={1.8} />
            Remove to cart
          </button>
        ) : (
          <button
            className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-neutral-800 group-hover:translate-y-0 group-hover:opacity-100 hover:cursor-pointer active:scale-95"
            onClick={() => addCart()}
          >
            <ShoppingBag size={15} strokeWidth={1.8} />
            Add to cart
          </button>
        )}
      </div>

      {/* Content */}
      <div className="px-1 pt-5 ">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
          {category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-medium tracking-tight text-neutral-950 transition-colors group-hover:text-neutral-600">
              {title}
            </h3>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5 text-[11px] text-neutral-900">
                ★★★★★
              </div>

              <span className="text-[11px] text-neutral-400">{rating}</span>
            </div>
          </div>

          {/* Price */}
          <div className="shrink-0 text-right">
            <p className="text-sm font-semibold tracking-tight text-neutral-950">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
