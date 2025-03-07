import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { allCoffees, allPastries } from "../data/products";
export function Menu({
  navigateToProduct
}) {
  const [activeTab, setActiveTab] = useState("coffee");
  return <div className="px-4 py-6">
      <div className="flex mb-6">
        <button className={`flex-1 py-2 text-center font-bold font-eb-garamond ${activeTab === "coffee" ? "text-burnt-ember border-b-2 border-burnt-ember" : "text-hearth-smoke hover:text-clove transition-colors"}`} onClick={() => setActiveTab("coffee")}>
          Coffee
        </button>
        <button className={`flex-1 py-2 text-center font-bold font-eb-garamond ${activeTab === "pastries" ? "text-burnt-ember border-b-2 border-burnt-ember" : "text-hearth-smoke hover:text-clove transition-colors"}`} onClick={() => setActiveTab("pastries")}>
          Pastries
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {(activeTab === "coffee" ? allCoffees : allPastries).map(item => <ProductCard key={item.id} product={item} onClick={navigateToProduct} />)}
      </div>
    </div>;
}