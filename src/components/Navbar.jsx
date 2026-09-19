import { useContext, useState } from "react";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavTab } from "../context/Provider";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cartSlice);
  const wishlist = useSelector((state) => state.wishlistSlice);

  const mobileNavItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <span className="text-lg font-bold">N</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-neutral-950">
            NOVA<span className="text-neutral-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* <Link
            to={"/"}
            onClick={() => setTab("home")}
            className={`relative py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
              tab === "home"
                ? "text-neutral-950"
                : "text-neutral-500 hover:text-neutral-950"
            } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-neutral-950 after:transition-all after:duration-300 ${
              tab === "home" ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setTab("shop")}
            className={`relative py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
              tab === "shop"
                ? "text-neutral-950"
                : "text-neutral-500 hover:text-neutral-950"
            } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-neutral-950 after:transition-all after:duration-300 ${
              tab === "shop" ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Shop
          </Link>
          <Link
            to="/categories"
            onClick={() => setTab("categories")}
            className={`relative py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
              tab === "categories"
                ? "text-neutral-950"
                : "text-neutral-500 hover:text-neutral-950"
            } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-neutral-950 after:transition-all after:duration-300 ${
              tab === "categories"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            }`}
          >
            Categories
          </Link> */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
                    isActive
                      ? "text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950"
                  }
                  } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-neutral-950 after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {/* Search button functionality will be added soon... */}
          {/* <button
            aria-label="Search"
            className="rounded-full p-3 text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
          >
            <Search size={20} strokeWidth={1.8} />
          </button> */}

          <Link
            to={"/wishlist"}
            aria-label="Wishlist"
            className="relative rounded-full p-3 text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
            onClick={() => setTab("")}
          >
            <Heart size={20} strokeWidth={1.8} />

            <span className="absolute right-1.5 top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-black px-1 text-[8px] font-bold text-white">
              {wishlist.wishlist.length}
            </span>
          </Link>

          <Link
            to={"/cart"}
            aria-label="Shopping bag"
            className="relative ml-1 rounded-full bg-black p-3 text-white transition hover:bg-neutral-800"
            onClick={() => setTab("")}
          >
            <ShoppingBag size={19} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-200 px-1 text-[10px] font-bold text-black ring-2 ring-white">
              {cart.cart.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="rounded-full p-2 text-neutral-900 transition hover:bg-neutral-100 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-neutral-100`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/*  */}
          <Link
            className="flex items-center justify-center rounded-xl mt-4  border-t border-neutral-100 pt-4 bg-black px-4 text-white flex-1 gap-2  py-3 text-sm font-medium"
            href={"/cart"}
          >
            <ShoppingBag size={18} />
            View your cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
