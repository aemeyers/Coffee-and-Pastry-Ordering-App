import React from "react";
import { Coffee, ChevronRight } from "lucide-react";
export function OrderHistory() {
  const orders = [{
    id: "12345",
    date: "Today, 10:30 AM",
    items: ["Cappuccino", "Croissant"],
    total: 8.48,
    status: "Ready for pickup"
  }, {
    id: "12344",
    date: "Yesterday, 2:15 PM",
    items: ["Cold Brew", "Blueberry Muffin"],
    total: 7.28,
    status: "Completed"
  }
  // Add more order history items here
  ];
  return <div className="px-4 py-6">
      <h1 className="text-2xl font-playfair text-hearth-smoke mb-6">
        Order History
      </h1>
      <div className="space-y-4">
        {orders.map(order => <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Coffee size={20} className="text-burnt-ember mr-2" />
                <span className="font-bold text-hearth-smoke">
                  Order #{order.id}
                </span>
              </div>
              <span className="text-sm text-hearth-smoke/70">{order.date}</span>
            </div>
            <div className="text-hearth-smoke/70 text-sm mb-2 font-cormorant">
              {order.items.join(", ")}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-burnt-ember">
                ${order.total.toFixed(2)}
              </span>
              <div className="flex items-center text-clove">
                <span className="text-sm">{order.status}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}