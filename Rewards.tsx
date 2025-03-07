import React from "react";
import { Star, Coffee, Gift } from "lucide-react";
export function Rewards({
  navigateToPage
}) {
  const handleRedeemReward = (points, reward) => {
    // In a real app, this would make an API call to redeem the reward
    alert(`Redeeming ${reward} for ${points} points`);
    // Then navigate to the confirmation page
    navigateToPage("confirmation");
  };
  return <div className="px-4 py-6">
      <div className="bg-gradient-to-r from-hearth-smoke to-hearth-smoke/90 rounded-lg p-6 mb-6 text-warm-tan">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-warm-tan">My Rewards</h1>
          <Star size={24} />
        </div>
        <div className="mb-4">
          <div className="text-4xl font-bold mb-1">150</div>
          <div className="text-warm-tan/80">Points Available</div>
        </div>
        <div className="w-full bg-warm-tan/20 rounded-full h-2 mb-2">
          <div className="bg-warm-tan rounded-full h-2 w-3/4"></div>
        </div>
        <div className="text-sm">100 more points until next reward</div>
      </div>
      <h2 className="text-lg font-bold text-hearth-smoke mb-4">
        Available Rewards
      </h2>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Coffee size={20} className="text-burnt-ember mr-2" />
              <span className="font-bold text-hearth-smoke">Free Coffee</span>
            </div>
            <button onClick={() => handleRedeemReward(200, "Free Coffee")} className="px-4 py-1 bg-burnt-ember text-white rounded-full text-sm hover:bg-oxblood transition-colors">
              Redeem 200pts
            </button>
          </div>
          <p className="text-hearth-smoke/70 text-sm font-cormorant">
            Get any size coffee of your choice
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Gift size={20} className="text-hearth-smoke mr-2" />
              <span className="font-bold text-hearth-smoke">$5 Off</span>
            </div>
            <button onClick={() => handleRedeemReward(500, "$5 Off")} className="px-4 py-1 bg-hearth-smoke text-white rounded-full text-sm hover:bg-hearth-smoke/90 transition-colors">
              Redeem 500pts
            </button>
          </div>
          <p className="text-hearth-smoke/70 text-sm">
            $5 discount on your next purchase
          </p>
        </div>
      </div>
    </div>;
}