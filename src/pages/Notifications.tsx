import React from "react";
import { Bell, Coffee, Tag, Star, Gift } from "lucide-react";
export function Notifications() {
  const notifications = [{
    id: 1,
    icon: Coffee,
    title: "Order Ready!",
    message: "Your order #12345 is ready for pickup.",
    time: "2 min ago",
    type: "order"
  }, {
    id: 2,
    icon: Tag,
    title: "Flash Sale!",
    message: "50% off on all pastries between 4-6 PM today.",
    time: "1 hour ago",
    type: "promo"
  }, {
    id: 3,
    icon: Star,
    title: "Bonus Points!",
    message: "You earned 50 bonus points on your last order.",
    time: "2 hours ago",
    type: "reward"
  }, {
    id: 4,
    icon: Gift,
    title: "Birthday Reward",
    message: "Your birthday reward is available! Claim your free drink.",
    time: "1 day ago",
    type: "reward"
  }];
  return <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-playfair text-hearth-smoke">Updates</h1>
        <button className="text-burnt-ember hover:text-clove transition-colors">
          Mark all as read
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map(notification => <div key={notification.id} className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div className={`p-2 rounded-full mr-3 ${notification.type === "order" ? "bg-forest/10 text-forest" : notification.type === "promo" ? "bg-burnt-ember/10 text-burnt-ember" : "bg-clove/10 text-clove"}`}>
                <notification.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-hearth-smoke font-eb-garamond">
                    {notification.title}
                  </h3>
                  <span className="text-xs text-hearth-smoke/70">
                    {notification.time}
                  </span>
                </div>
                <p className="text-hearth-smoke/70 text-sm font-cormorant">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}