import React from "react";
import { Home, Coffee, ShoppingBag, MapPin } from "lucide-react";
export function BottomNavigation({
  currentPage,
  setCurrentPage
}) {
  const navItems = [{
    id: "home",
    icon: Home,
    label: "Home"
  }, {
    id: "menu",
    icon: Coffee,
    label: "Menu"
  }, {
    id: "cart",
    icon: ShoppingBag,
    label: "Cart"
  }, {
    id: "locations",
    icon: MapPin,
    label: "Locations"
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
      <div className="flex justify-around items-center h-16">
        {navItems.map(item => <button key={item.id} className={`flex flex-col items-center justify-center w-full font-eb-garamond ${currentPage === item.id ? "text-burnt-ember" : "text-hearth-smoke"}`} onClick={() => setCurrentPage(item.id)}>
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>)}
      </div>
    </nav>;
}