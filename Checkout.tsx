import React, { useState } from "react";
import { CreditCard } from "lucide-react";
export function Checkout({
  cart,
  navigateToConfirmation
}) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const handleSubmit = e => {
    e.preventDefault();
    navigateToConfirmation();
  };
  return <div className="px-3 py-2">
      <h1 className="text-xl font-bold text-gray-800 mb-2">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-800 mb-1.5">
            Payment Method
          </h2>
          <div className="space-y-1.5">
            <div className={`border rounded-md px-3 py-2 flex items-center text-sm ${paymentMethod === "card" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("card")}>
              <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="mr-2" />
              <CreditCard size={16} className="mr-2 text-gray-600" />
              <span>Credit / Debit Card</span>
            </div>
            <div className={`border rounded-md px-3 py-2 flex items-center text-sm ${paymentMethod === "applepay" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("applepay")}>
              <input type="radio" name="payment" checked={paymentMethod === "applepay"} onChange={() => setPaymentMethod("applepay")} className="mr-2" />
              <span>Apple Pay</span>
            </div>
            <div className={`border rounded-md px-3 py-2 flex items-center text-sm ${paymentMethod === "cash" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("cash")}>
              <input type="radio" name="payment" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="mr-2" />
              <span>Cash on Pickup</span>
            </div>
          </div>
        </div>
        {paymentMethod === "card" && <div className="mb-3">
            <div className="space-y-1.5">
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm" required />
              <div className="flex gap-1.5">
                <input type="text" placeholder="MM/YY" className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm" required />
                <input type="text" placeholder="CVC" className="w-20 border border-gray-300 rounded-md px-3 py-1.5 text-sm" required />
              </div>
              <input type="text" placeholder="Name on Card" className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm" required />
            </div>
          </div>}
        <div className="bg-gray-50 rounded-lg p-1.5 mb-1.5 text-sm">
          <div className="flex justify-between mb-0.5">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-0.5">
            <span className="text-gray-600">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button type="submit" className="w-full py-1.5 bg-amber-800 text-white font-bold rounded-md text-sm">
          Place Order
        </button>
      </form>
    </div>;
}