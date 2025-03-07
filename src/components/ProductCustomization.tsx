import React from "react";
import { ThermometerSun, Droplets, Heart, Plus, Minus } from "lucide-react";
export function ProductCustomization({
  product,
  quantity,
  setQuantity,
  selectedOptions,
  setSelectedOptions,
  onAddToCart
}) {
  const handleOptionChange = (category, option) => {
    setSelectedOptions(prev => {
      if (category === "extras") {
        const currentExtras = prev[category] || [];
        if (currentExtras.includes(option)) {
          return {
            ...prev,
            [category]: currentExtras.filter(item => item !== option)
          };
        } else {
          return {
            ...prev,
            [category]: [...currentExtras, option]
          };
        }
      }
      return {
        ...prev,
        [category]: option
      };
    });
  };
  const isOptionSelected = (category, option) => {
    if (category === "extras") {
      return selectedOptions[category]?.includes(option);
    }
    return selectedOptions[category] === option;
  };
  const renderOptionGroup = (title, options, category, icon) => <div className="mb-2">
      <h3 className="text-sm font-bold text-hearth-smoke mb-1 flex items-center font-playfair">
        {icon}
        {title}
      </h3>
      <div className="flex flex-wrap gap-1">
        {options.map(option => <button key={option} onClick={() => handleOptionChange(category, option)} className={`py-0.5 px-2 rounded-full border text-xs font-eb-garamond ${isOptionSelected(category, option) ? "bg-burnt-ember text-white border-burnt-ember" : "border-hearth-smoke/20 text-hearth-smoke hover:border-burnt-ember"}`}>
            {option}
          </button>)}
      </div>
    </div>;
  return <div>
      {product.type === "coffee" && <>
          {renderOptionGroup("Size", ["S", "M", "L"], "size", <ThermometerSun className="mr-1 text-burnt-ember" size={14} />)}
          {renderOptionGroup("Temp", ["Hot", "Iced"], "temperature", <ThermometerSun className="mr-1 text-burnt-ember" size={14} />)}
          {renderOptionGroup("Sweet", ["0%", "50%", "100%"], "sweetness", <Droplets className="mr-1 text-burnt-ember" size={14} />)}
          {renderOptionGroup("Milk", ["Reg", "Oat", "Alm"], "milk", <Heart className="mr-1 text-burnt-ember" size={14} />)}
          {renderOptionGroup("Extras", ["Whip", "Caramel", "Choc"], "extras", <Plus className="mr-1 text-burnt-ember" size={14} />)}
        </>}
      {product.type === "pastry" && <>
          {renderOptionGroup("Temp", ["Warm", "Room"], "temperature", <ThermometerSun className="mr-1 text-burnt-ember" size={14} />)}
          {renderOptionGroup("Add", ["Butter", "Jam", "Honey"], "extras", <Plus className="mr-1 text-burnt-ember" size={14} />)}
        </>}
      <div className="mt-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center border border-hearth-smoke/20 rounded-md overflow-hidden">
            <button className="px-2 py-1 bg-white hover:bg-gray-50 transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus size={14} className="text-hearth-smoke" />
            </button>
            <span className="px-3 py-1 text-sm text-hearth-smoke">
              {quantity}
            </span>
            <button className="px-2 py-1 bg-white hover:bg-gray-50 transition-colors" onClick={() => setQuantity(quantity + 1)}>
              <Plus size={14} className="text-hearth-smoke" />
            </button>
          </div>
          <span className="font-bold text-base text-burnt-ember">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
        <button className="w-full py-1.5 bg-burnt-ember text-white font-bold rounded-md hover:bg-oxblood transition-colors text-sm" onClick={onAddToCart}>
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>;
}