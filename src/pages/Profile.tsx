import React from "react";
import { User, CreditCard, MapPin, Bell, LogOut } from "lucide-react";
export function Profile({
  navigateToPage
}) {
  return <div className="px-4 py-6">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 bg-burnt-ember/10 rounded-full flex items-center justify-center">
          <User size={32} className="text-burnt-ember" />
        </div>
        <div>
          <h1 className="text-2xl font-playfair text-hearth-smoke">John Doe</h1>
          <p className="text-hearth-smoke/70 font-cormorant">
            john.doe@example.com
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <button onClick={() => navigateToPage("payment")} className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <CreditCard className="text-clove mr-3" size={20} />
          <span className="flex-1 text-left text-hearth-smoke font-eb-garamond">
            Payment Methods
          </span>
        </button>
        <button onClick={() => navigateToPage("locations")} className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <MapPin className="text-clove mr-3" size={20} />
          <span className="flex-1 text-left text-hearth-smoke font-eb-garamond">
            Saved Addresses
          </span>
        </button>
        <button onClick={() => navigateToPage("notifications")} className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <Bell className="text-clove mr-3" size={20} />
          <span className="flex-1 text-left text-hearth-smoke font-eb-garamond">
            Notification Preferences
          </span>
        </button>
        <button onClick={() => navigateToPage("home")} className="w-full flex items-center p-4 mt-8 bg-burnt-ember/10 rounded-lg shadow-sm hover:bg-burnt-ember/20 transition-colors">
          <LogOut className="mr-3 text-burnt-ember" size={20} />
          <span className="flex-1 text-left text-burnt-ember font-eb-garamond">
            Sign Out
          </span>
        </button>
      </div>
    </div>;
}