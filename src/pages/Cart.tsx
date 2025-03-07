import React from "react";
import { ChevronLeft, Trash2, Minus, Plus } from "lucide-react";
export function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  navigateToCheckout
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  if (cart.length === 0) {
    return <div className="flex flex-col items-center justify-center h-full px-4 py-10">
        <div className="bg-amber-100 rounded-full p-6 mb-4">
          <ShoppingBag size={48} className="text-amber-800" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Add some delicious coffee and pastries to get started!
        </p>
      </div>;
  }
  return <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="mb-6">
        {cart.map(item => <div key={item.id} className="flex border-b border-gray-200 py-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <button className="text-gray-400" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
              {item.options && Object.keys(item.options).length > 0 && <p className="text-sm text-gray-500 mb-2">
                  {Object.entries(item.options).map(([key, value]) => `${key}: ${value}`).join(", ")}
                </p>}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button className="px-2 py-1 bg-gray-100" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button className="px-2 py-1 bg-gray-100" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={14} />
                  </button>
                </div>
                <span className="font-bold text-amber-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full py-3 bg-amber-800 text-white font-bold rounded-md" onClick={navigateToCheckout}>
        Proceed to Checkout
      </button>
    </div>;
}
// Import for the empty cart state
import { ShoppingBag } from "lucide-react";