import React from "react";
import { CheckCircle, Coffee } from "lucide-react";
export function OrderConfirmation({
  navigateToHome
}) {
  return <div className="flex flex-col items-center justify-center h-full px-4 py-10">
      <div className="bg-green-100 rounded-full p-6 mb-4">
        <CheckCircle size={48} className="text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Order Confirmed!
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Your order has been placed successfully. You'll receive a notification
        when it's ready.
      </p>
      <div className="bg-amber-50 w-full rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center mb-4">
          <Coffee size={20} className="text-amber-800 mr-2" />
          <span className="font-bold text-amber-800">Order #12345</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Estimated Pickup Time</span>
          <span className="font-bold">15-20 minutes</span>
        </div>
      </div>
      <button className="w-full py-3 bg-amber-800 text-white font-bold rounded-md" onClick={navigateToHome}>
        Back to Home
      </button>
    </div>;
}