import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Coffee, Cake } from "lucide-react";
import { ProductCustomization } from "../components/ProductCustomization";
import { allCoffees, allPastries } from "../data/products";
export function ProductDetail({
  addToCart,
  goBack
}) {
  const {
    productId
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showCustomize, setShowCustomize] = useState(false);
  const [product, setProduct] = useState(null);
  const [imageError, setImageError] = useState(false);
  useEffect(() => {
    const foundProduct = [...allCoffees, ...allPastries].find(p => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
    goBack();
  };
  if (!product) {
    return <div>Product not found</div>;
  }
  return <div className="flex flex-col h-full bg-white">
      <div className="h-24 relative bg-gray-100">
        {!imageError ? <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={() => setImageError(true)} loading="eager" /> : <div className="w-full h-full flex items-center justify-center">
            {product.type === "coffee" ? <Coffee className="text-gray-400" size={40} /> : <Cake className="text-gray-400" size={40} />}
          </div>}
        <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-50" onClick={goBack}>
          <ChevronLeft size={16} className="text-hearth-smoke" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-1.5">
          <h1 className="text-lg font-playfair text-hearth-smoke">
            {product.name}
          </h1>
          <span className="text-base font-bold text-burnt-ember font-eb-garamond">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-hearth-smoke/70 mb-2 text-sm font-cormorant">
          {product.description}
        </p>
        <div className="flex gap-2 mb-3">
          <button onClick={() => setShowCustomize(false)} className={`flex-1 py-1.5 text-center font-bold font-eb-garamond text-sm rounded-md ${!showCustomize ? "bg-burnt-ember text-white" : "bg-white text-hearth-smoke border border-hearth-smoke/20"}`}>
            Quick Add
          </button>
          <button onClick={() => setShowCustomize(true)} className={`flex-1 py-1.5 text-center font-bold font-eb-garamond text-sm rounded-md ${showCustomize ? "bg-burnt-ember text-white" : "bg-white text-hearth-smoke border border-hearth-smoke/20"}`}>
            Customize
          </button>
        </div>
        {showCustomize ? <ProductCustomization product={product} quantity={quantity} setQuantity={setQuantity} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} onAddToCart={handleAddToCart} /> : <div>
            <div className="flex justify-between items-center mb-3">
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
            <button className="w-full py-1.5 bg-burnt-ember text-white font-bold rounded-md hover:bg-oxblood transition-colors text-sm" onClick={handleAddToCart}>
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>}
      </div>
    </div>;
}