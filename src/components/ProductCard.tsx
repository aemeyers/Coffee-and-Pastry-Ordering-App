import React, { useState, lazy } from "react";
import { Plus, Coffee, Cake } from "lucide-react";
export function ProductCard({
  product,
  onClick
}) {
  const [imageError, setImageError] = useState(false);
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow" onClick={() => onClick(product)}>
      <div className="h-24 overflow-hidden bg-gray-100 relative">
        {!imageError ? <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={() => setImageError(true)} loading="lazy" /> : <div className="w-full h-full flex items-center justify-center">
            {product.type === "coffee" ? <Coffee className="text-gray-400" size={32} /> : <Cake className="text-gray-400" size={32} />}
          </div>}
      </div>
      <div className="p-1.5 flex-1 flex flex-col justify-between">
        <h3 className="font-playfair text-sm text-hearth-smoke leading-tight mb-0.5">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-eb-garamond font-bold text-burnt-ember text-sm">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-burnt-ember text-white px-2 py-1 rounded text-xs font-eb-garamond hover:bg-oxblood transition-colors" onClick={e => {
          e.stopPropagation();
          onClick(product);
        }}>
            Add
          </button>
        </div>
      </div>
    </div>;
}