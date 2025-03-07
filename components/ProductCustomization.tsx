import React from "react";
import { Minus, Plus, ThermometerSun, Droplets, Heart } from "lucide-react";
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
      if (category === "extras" || category === "syrups") {
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
    if (category === "extras" || category === "syrups") {
      return selectedOptions[category]?.includes(option);
    }
    return selectedOptions[category] === option;
  };
  const renderOptionGroup = (title, options, category) => <div className="mb-6">
      <h3 className="text-lg font-bold text-hearth-smoke mb-3 flex items-center font-playfair">
        {category === "temperature" && <ThermometerSun className="mr-2 text-burnt-ember" size={20} />}
        {category === "sweetness" && <Droplets className="mr-2 text-burnt-ember" size={20} />}
        {category === "extras" && <Heart className="mr-2 text-burnt-ember" size={20} />}
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map(option => <button key={option} onClick={() => handleOptionChange(category, option)} className={`py-2 px-4 rounded-full border font-eb-garamond ${isOptionSelected(category, option) ? "bg-burnt-ember text-white border-burnt-ember" : "border-hearth-smoke/20 text-hearth-smoke hover:border-burnt-ember"}`}>
            {option}
          </button>)}
      </div>
    </div>;
  return <div className="flex-1">
      {product.type === "coffee" && <>
          {renderOptionGroup("Size", ["Small", "Medium", "Large"], "size")}
          {renderOptionGroup("Temperature", ["Hot", "Iced"], "temperature")}
          {renderOptionGroup("Sweetness", ["No Sugar", "25%", "50%", "75%", "100%"], "sweetness")}
          {renderOptionGroup("Milk", ["Regular", "Oat", "Almond", "Soy"], "milk")}
          {renderOptionGroup("Extras", ["Whipped Cream", "Caramel Drizzle", "Chocolate Drizzle"], "extras")}
        </>}
      {product.type === "pastry" && <>
          {renderOptionGroup("Temperature", ["Warmed", "Room Temperature"], "temperature")}
          {renderOptionGroup("Add-ons", ["Butter", "Jam", "Cream Cheese", "Honey"], "extras")}
        </>}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center border border-hearth-smoke/20 rounded-md overflow-hidden">
            <button className="px-3 py-2 bg-white hover:bg-gray-50 transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus size={16} className="text-hearth-smoke" />
            </button>
            <span className="px-4 py-2 text-hearth-smoke">{quantity}</span>
            <button className="px-3 py-2 bg-white hover:bg-gray-50 transition-colors" onClick={() => setQuantity(quantity + 1)}>
              <Plus size={16} className="text-hearth-smoke" />
            </button>
          </div>
          <span className="font-bold text-lg text-burnt-ember">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
        <button className="w-full py-3 bg-burnt-ember text-white font-bold rounded-md hover:bg-oxblood transition-colors" onClick={() => onAddToCart(quantity, selectedOptions)}>
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>;
}