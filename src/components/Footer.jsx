import { ArrowUpRight, Mail } from "lucide-react";
import { useContext } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NavTab } from "../context/Provider";
import { toast } from "sonner";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://www.x.com/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/",
  },
];

const Footer = () => {
  const { setTab } = useContext(NavTab);

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        {/* Top */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-neutral-950"
            >
              NOVA<span className="text-neutral-400">.</span>
            </a>

            <p className="mt-4 text-sm leading-6 text-neutral-500">
              Thoughtfully designed essentials for modern everyday living.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-2">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_main"
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                  >
                    <Icon className="text-[16px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:gap-x-20">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-950">
                Shop
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-neutral-500">
                <li>
                  <Link
                    to="/shop"
                    className="transition hover:text-neutral-950"
                    onClick={() => setTab("shop")}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="transition hover:text-neutral-950"
                    onClick={() => setTab("categories")}
                  >
                    All categories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-950">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-neutral-500">
                <li>
                  <a
                    href="/about"
                    className="transition hover:text-neutral-950"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="transition hover:text-neutral-950"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 flex flex-col gap-5 border-y border-neutral-100 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-neutral-950">
              Stay in the loop
            </h3>
            <p className="mt-1 text-xs text-neutral-500">
              Get updates on new drops and exclusive offers.
            </p>
          </div>

          <form className="flex w-full max-w-md items-center rounded-full border border-neutral-200 p-1 focus-within:border-neutral-950">
            <Mail className="ml-3 shrink-0 text-neutral-400" size={16} />

            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400"
            />

            <button
              type="submit"
              className="flex cursor-pointer active:scale-95 items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                toast.success("You have subscribed... Thank you!");
              }}
            >
              Subscribe
              <ArrowUpRight size={13} />
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOVA. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-neutral-950">
              Terms
            </a>
            <a href="#" className="transition hover:text-neutral-950">
              Privacy
            </a>
            <a href="#" className="transition hover:text-neutral-950">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
