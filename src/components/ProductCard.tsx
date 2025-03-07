import React from "react";
import { Plus } from "lucide-react";
export function ProductCard({
  product,
  onClick
}) {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow" onClick={() => onClick(product)}>
      <div className="h-40 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-playfair text-hearth-smoke mb-1">{product.name}</h3>
        <p className="font-cormorant text-sm mb-2 flex-1 text-hearth-smoke/80">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-eb-garamond font-bold text-burnt-ember">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-burnt-ember text-white px-3 py-1.5 rounded-full text-sm font-eb-garamond hover:bg-oxblood transition-colors" onClick={e => {
          e.stopPropagation();
          onClick(product);
        }}>
            Customize
          </button>
        </div>
      </div>
    </div>;
}