import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, Minus, Plus } from "lucide-react";
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
  useEffect(() => {
    // Find the product from all products
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
      <div className="h-64 relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50" onClick={goBack}>
          <ChevronLeft size={20} className="text-hearth-smoke" />
        </button>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-playfair text-hearth-smoke">
            {product.name}
          </h1>
          <span className="text-xl font-bold text-burnt-ember font-eb-garamond">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-hearth-smoke/70 mb-6 font-cormorant">
          {product.description}
        </p>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setShowCustomize(false)} className={`flex-1 py-2 text-center font-bold font-eb-garamond rounded-md ${!showCustomize ? "bg-burnt-ember text-white" : "bg-white text-hearth-smoke border border-hearth-smoke/20"}`}>
            Quick Add
          </button>
          <button onClick={() => setShowCustomize(true)} className={`flex-1 py-2 text-center font-bold font-eb-garamond rounded-md ${showCustomize ? "bg-burnt-ember text-white" : "bg-white text-hearth-smoke border border-hearth-smoke/20"}`}>
            Customize
          </button>
        </div>
        {showCustomize ? <ProductCustomization product={product} quantity={quantity} setQuantity={setQuantity} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} onAddToCart={handleAddToCart} /> : <div className="mt-auto">
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
            <button className="w-full py-3 bg-burnt-ember text-white font-bold rounded-md hover:bg-oxblood transition-colors" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>}
      </div>
    </div>;
}