import React, { useState } from "react";
import { ChevronLeft, CreditCard, Clock, MapPin } from "lucide-react";
export function Checkout({
  cart,
  navigateToConfirmation
}) {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = deliveryMethod === "delivery" ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;
  const handleSubmit = e => {
    e.preventDefault();
    navigateToConfirmation();
  };
  return <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Delivery Method
          </h2>
          <div className="flex gap-4">
            <button type="button" className={`flex-1 border rounded-md py-3 px-4 flex flex-col items-center ${deliveryMethod === "pickup" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setDeliveryMethod("pickup")}>
              <Clock size={24} className={deliveryMethod === "pickup" ? "text-amber-800" : "text-gray-500"} />
              <span className={`mt-2 ${deliveryMethod === "pickup" ? "text-amber-800 font-bold" : "text-gray-600"}`}>
                Pickup
              </span>
            </button>
            <button type="button" className={`flex-1 border rounded-md py-3 px-4 flex flex-col items-center ${deliveryMethod === "delivery" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setDeliveryMethod("delivery")}>
              <MapPin size={24} className={deliveryMethod === "delivery" ? "text-amber-800" : "text-gray-500"} />
              <span className={`mt-2 ${deliveryMethod === "delivery" ? "text-amber-800 font-bold" : "text-gray-600"}`}>
                Delivery
              </span>
            </button>
          </div>
        </div>
        {deliveryMethod === "delivery" && <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Delivery Address
            </h2>
            <div className="space-y-3">
              <input type="text" placeholder="Address Line 1" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
              <input type="text" placeholder="Address Line 2 (Optional)" className="w-full border border-gray-300 rounded-md px-4 py-2" />
              <div className="flex gap-3">
                <input type="text" placeholder="City" className="flex-1 border border-gray-300 rounded-md px-4 py-2" required />
                <input type="text" placeholder="ZIP" className="w-24 border border-gray-300 rounded-md px-4 py-2" required />
              </div>
            </div>
          </div>}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Payment Method
          </h2>
          <div className="space-y-3">
            <div className={`border rounded-md px-4 py-3 flex items-center ${paymentMethod === "card" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("card")}>
              <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="mr-3" />
              <CreditCard size={20} className="mr-2 text-gray-600" />
              <span>Credit / Debit Card</span>
            </div>
            <div className={`border rounded-md px-4 py-3 flex items-center ${paymentMethod === "applepay" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("applepay")}>
              <input type="radio" name="payment" checked={paymentMethod === "applepay"} onChange={() => setPaymentMethod("applepay")} className="mr-3" />
              <span>Apple Pay</span>
            </div>
            <div className={`border rounded-md px-4 py-3 flex items-center ${paymentMethod === "cash" ? "border-amber-800 bg-amber-50" : "border-gray-300"}`} onClick={() => setPaymentMethod("cash")}>
              <input type="radio" name="payment" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="mr-3" />
              <span>
                Cash on {deliveryMethod === "pickup" ? "Pickup" : "Delivery"}
              </span>
            </div>
          </div>
        </div>
        {paymentMethod === "card" && <div className="mb-6">
            <div className="space-y-3">
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
              <div className="flex gap-3">
                <input type="text" placeholder="MM/YY" className="flex-1 border border-gray-300 rounded-md px-4 py-2" required />
                <input type="text" placeholder="CVC" className="w-24 border border-gray-300 rounded-md px-4 py-2" required />
              </div>
              <input type="text" placeholder="Name on Card" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
            </div>
          </div>}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {deliveryMethod === "delivery" && <div className="flex justify-between mb-2">
              <span className="text-gray-600">Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>}
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button type="submit" className="w-full py-3 bg-amber-800 text-white font-bold rounded-md">
          Place Order
        </button>
      </form>
    </div>;
}