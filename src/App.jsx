import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ScrollToTop from "./components/ScrollToTop";
import Provider from "./context/Provider";
import { Toaster } from "sonner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Provider>
        <Toaster
          position="top-right"
          expand={false}
          richColors
          duration={2000}
          gap={10}
          visibleToasts={4}
          offset={{ top: 90, right: 20 }}
          toastOptions={{
            className:
              "w-fit min-w-[120px] max-w-[300px] rounded-lg border border-neutral-200 bg-white shadow-md",
            classNames: {
              toast: "px-3 py-2.5",
              title: "text-xs font-semibold text-neutral-900",
              description: "text-[11px] text-neutral-500",
              icon: "size-4",
              actionButton: "rounded-md px-2 py-1 text-[11px] font-medium",
              cancelButton: "rounded-md px-2 py-1 text-[11px] font-medium",
            },
          }}
        />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
