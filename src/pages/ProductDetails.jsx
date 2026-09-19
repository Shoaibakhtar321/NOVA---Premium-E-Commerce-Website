import { useEffect, useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getOneProduct } from "../api/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, increaseQty } from "../redux/cartSlice";
import ProductDetailsSkeleton from "../skeleton/ProductDetailsSkeleton";
import { addToWishlist, removeToWishlist } from "../redux/wishlistSlice";
import { toast } from "sonner";

const ProductDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();

  const productID = Number(id);
  const { cart } = useSelector((state) => state.cartSlice);

  const [details, setDetails] = useState(state || null || data);
  const [selectedImage, setSelectedImage] = useState(0);

  const openedItem = cart.find((item) => item.id === productID);

  const [quantity, setQuantity] = useState(openedItem?.qty || 1);

  const wishlist = useSelector((state) => state.wishlistSlice.wishlist);

  const wishlistItem = wishlist.some((item) => item.id === productID);

  function handleWishlist() {
    if (wishlistItem) {
      dispatch(removeToWishlist(productID));
      toast.info("Item has been removed from your wishlist");
    } else {
      dispatch(
        addToWishlist({
          title,
          thumbnail,
          price,
          rating,
          category,
          id: productID,
        }),
      );
      toast.success("Item has been saved in your wishlist");
    }
  }

  useEffect(() => {
    if (state) return;

    const fetchProduct = async () => {
      const product = await getOneProduct(id);
      setDetails(product);
    };

    fetchProduct();
  }, [id, state]);

  if (!details) {
    return (
      <>
        <ProductDetailsSkeleton />
      </>
    );
  }

  const { title, thumbnail, price, category, rating } = details;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-neutral-400">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="transition hover:text-black">
            Shop
          </Link>
          <span>/</span>
          <span className="text-neutral-700">{details.title}</span>
        </div>

        {/* Product */}
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Gallery */}
          <section className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto md:w-24 md:flex-col">
              {details.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-neutral-100 transition ${
                    selectedImage === index
                      ? "border-neutral-950"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${details.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-[28px] bg-neutral-100">
              <img
                src={details.images[selectedImage]}
                alt={details.title}
                className="h-full w-full object-cover"
              />

              <button
                onClick={handleWishlist}
                aria-label="Add to wishlist"
                className={`absolute cursor-pointer right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur transition hover:scale-105 ${
                  wishlistItem ? "text-red-500" : "text-neutral-900"
                }`}
              >
                <Heart
                  size={19}
                  fill={wishlistItem ? "currentColor" : "none"}
                />
              </button>
            </div>
          </section>

          {/* Information */}
          <section className="flex flex-col py-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {details.category}
            </span>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              {details.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star size={15} fill="currentColor" />
                <span className="text-sm font-semibold">{details.rating}</span>
              </div>

              <span className="h-4 w-px bg-neutral-200" />
            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-neutral-950">
                ${details.price}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
              {details.description}
            </p>

            {/* Divider */}
            <div className="my-7 h-px bg-neutral-100" />

            {/* Quantity + Cart */}
            <div className="mt-7 flex gap-3">
              <div className="flex h-13 items-center rounded-xl border border-neutral-200">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="flex h-12 w-11 items-center justify-center text-neutral-500 transition hover:text-black"
                >
                  <Minus size={15} />
                </button>

                <span className="w-8 text-center text-sm font-medium">
                  {quantity}
                </span>

                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="flex h-12 w-11 items-center justify-center text-neutral-500 transition hover:text-black"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                className="flex cursor-pointer h-13 flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-950 text-sm font-semibold text-white transition hover:bg-neutral-800"
                onClick={() => {
                  if (!openedItem) {
                    dispatch(
                      addToCart({
                        title,
                        thumbnail,
                        price,
                        category,
                        id: productID,
                        qty: quantity,
                      }),
                    );
                    toast.success("item added successfully");
                  } else {
                    toast.info("Item is already in your cart");
                  }
                }}
              >
                <ShoppingBag size={18} />
                Add to cart
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-3 border-y border-neutral-100 py-5">
              <div className="flex flex-col items-center gap-2 border-r border-neutral-100 text-center">
                <Truck size={18} strokeWidth={1.6} />
                <span className="text-[10px] font-medium text-neutral-600">
                  Free shipping
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 border-r border-neutral-100 text-center">
                <RotateCcw size={18} strokeWidth={1.6} />
                <span className="text-[10px] font-medium text-neutral-600">
                  Easy returns
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck size={18} strokeWidth={1.6} />
                <span className="text-[10px] font-medium text-neutral-600">
                  Secure payment
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Back */}
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to shop
        </a>
      </div>
    </main>
  );
};

export default ProductDetails;
