import React from "react";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { featuredCoffees, featuredPastries } from "../data/products";
export function Home({
  navigateToMenu,
  navigateToProduct
}) {
  return <div className="px-4 py-6">
      <section className="mb-8">
        <div className="bg-gradient-to-r from-hearth-smoke to-hearth-smoke/90 text-warm-tan p-6 rounded-lg shadow-lg mb-4">
          <h2 className="font-playfair text-2xl mb-2 text-warm-tan">
            Welcome to Brim & Smoke
          </h2>
          <p className="font-cormorant mb-4 text-warm-tan/90">
            Artisanal coffee and handcrafted pastries, curated for your
            pleasure.
          </p>
          <button className="bg-warm-tan text-hearth-smoke px-4 py-2 rounded-md font-eb-garamond font-bold hover:bg-warm-tan/90 transition-colors" onClick={() => navigateToMenu()}>
            Order Now
          </button>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-playfair text-hearth-smoke">
            Featured Coffees
          </h2>
          <button className="text-clove hover:text-burnt-ember flex items-center font-eb-garamond transition-colors" onClick={() => navigateToMenu()}>
            See All <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredCoffees.map(coffee => <ProductCard key={coffee.id} product={coffee} onClick={navigateToProduct} />)}
        </div>
      </section>
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-playfair text-hearth-smoke">
            Featured Pastries
          </h2>
          <button className="text-clove hover:text-burnt-ember flex items-center font-eb-garamond transition-colors" onClick={() => navigateToMenu()}>
            See All <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredPastries.map(pastry => <ProductCard key={pastry.id} product={pastry} onClick={navigateToProduct} />)}
        </div>
      </section>
    </div>;
}