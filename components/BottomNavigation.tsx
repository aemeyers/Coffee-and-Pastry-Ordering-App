import React, { useState } from "react";
import { Home, Coffee, Cake, ShoppingBag, User, MapPin, Gift, Star, Clock, Bell } from "lucide-react";
export function BottomNavigation({
  currentPage,
  setCurrentPage
}) {
  const [showMore, setShowMore] = useState(false);
  const primaryNavItems = [{
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
    id: "profile",
    icon: User,
    label: "Profile"
  }, {
    id: "more",
    icon: () => <span className="text-xl">•••</span>,
    label: "More"
  }];
  const secondaryNavItems = [{
    id: "locations",
    icon: MapPin,
    label: "Locations"
  }, {
    id: "gifts",
    icon: Gift,
    label: "Gift Cards"
  }, {
    id: "rewards",
    icon: Star,
    label: "Rewards"
  }, {
    id: "orders",
    icon: Clock,
    label: "Orders"
  }, {
    id: "notifications",
    icon: Bell,
    label: "Updates"
  }];
  const handleNavClick = pageId => {
    if (pageId === "more") {
      setShowMore(!showMore);
    } else {
      setCurrentPage(pageId);
      setShowMore(false);
    }
  };
  return <>
      {showMore && <div className="fixed inset-0 bg-hearth-smoke bg-opacity-50 z-20" onClick={() => setShowMore(false)} />}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
        <div className="flex justify-around items-center h-16">
          {primaryNavItems.map(item => <button key={item.id} className={`flex flex-col items-center justify-center w-full font-eb-garamond ${currentPage === item.id ? "text-burnt-ember" : "text-hearth-smoke"}`} onClick={() => handleNavClick(item.id)}>
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>)}
        </div>
        {showMore && <div className="absolute bottom-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-t-xl overflow-hidden">
            <div className="grid grid-cols-2 gap-1 p-4">
              {secondaryNavItems.map(item => <button key={item.id} className={`flex items-center space-x-3 p-4 rounded-lg font-eb-garamond ${currentPage === item.id ? "bg-burnt-ember bg-opacity-10 text-burnt-ember" : "text-hearth-smoke hover:bg-gray-50"}`} onClick={() => handleNavClick(item.id)}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>)}
            </div>
          </div>}
      </nav>
    </>;
}