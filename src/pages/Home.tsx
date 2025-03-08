import React from "react";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { featuredCoffees, featuredPastries } from "../data/products";
export function Home({
  navigateToMenu,
  navigateToProduct
}) {
  return <div className="h-full flex flex-col">
      <section className="mb-4">
        <div className="bg-gradient-to-r from-hearth-smoke to-hearth-smoke/90 text-warm-tan p-4 rounded-lg shadow-lg">
          <h2 className="font-playfair text-xl mb-2 text-warm-tan">
            Welcome to Brim & Smoke
          </h2>
          <p className="font-cormorant mb-3 text-sm text-warm-tan/90">
            Artisanal coffee and handcrafted pastries.
          </p>
          <button className="bg-warm-tan text-hearth-smoke px-3 py-1.5 rounded-md font-eb-garamond font-bold hover:bg-warm-tan/90 transition-colors text-sm" onClick={() => navigateToMenu()}>
            Order Now
          </button>
        </div>
      </section>
      <div className="flex-1 space-y-4">
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-playfair text-hearth-smoke">
              Featured Coffees
            </h2>
            <button className="text-sm text-clove hover:text-burnt-ember flex items-center font-eb-garamond transition-colors" onClick={() => navigateToMenu()}>
              See All <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featuredCoffees.map(coffee => <ProductCard key={coffee.id} product={coffee} onClick={navigateToProduct} />)}
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-playfair text-hearth-smoke">
              Featured Pastries
            </h2>
            <button className="text-sm text-clove hover:text-burnt-ember flex items-center font-eb-garamond transition-colors" onClick={() => navigateToMenu()}>
              See All <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featuredPastries.map(pastry => <ProductCard key={pastry.id} product={pastry} onClick={navigateToProduct} />)}
          </div>
        </section>
      </div>
    </div>;
}