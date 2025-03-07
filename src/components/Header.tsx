import React from "react";
import { ShoppingBag, Home } from "lucide-react";
export function Header({
  cartItemCount,
  navigateToCart,
  navigateToHome
}) {
  return <header className="sticky top-0 z-10 bg-hearth-smoke text-warm-tan px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={navigateToHome} className="mr-2">
            <Home size={24} />
          </button>
          <h1 className="font-playfair text-xl text-warm-tan">Brim & Smoke</h1>
        </div>
        <button onClick={navigateToCart} className="relative p-1.5 rounded-full hover:bg-hearth-smoke/80 transition-colors">
          <ShoppingBag size={24} />
          {cartItemCount > 0 && <span className="absolute -top-1 -right-1 bg-clove text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-eb-garamond">
              {cartItemCount}
            </span>}
        </button>
      </div>
    </header>;
}