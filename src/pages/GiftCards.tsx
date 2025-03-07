import React from "react";
import { Gift, CreditCard, Send } from "lucide-react";
export function GiftCards() {
  return <div className="px-4 py-6">
      <h1 className="text-2xl font-playfair text-hearth-smoke mb-6">
        Gift Cards
      </h1>
      <div className="bg-gradient-to-r from-burnt-ember to-oxblood rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-white text-lg font-bold mb-1 font-playfair">
              Brim & Smoke
            </h2>
            <p className="text-white/80 font-cormorant">Gift Card Balance</p>
          </div>
          <Gift className="text-white" size={24} />
        </div>
        <div className="text-white text-3xl font-bold mb-4 font-eb-garamond">
          $50.00
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-white text-burnt-ember py-2 rounded-md font-bold hover:bg-clove hover:text-white transition-colors">
            Reload
          </button>
          <button className="flex-1 bg-white/20 text-white py-2 rounded-md font-bold hover:bg-white/30 transition-colors">
            Transfer
          </button>
        </div>
      </div>
      <h2 className="text-lg font-bold text-hearth-smoke mb-4">
        Send a Gift Card
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition-colors">
          <CreditCard size={24} className="text-burnt-ember mb-2" />
          <span className="text-sm font-bold text-hearth-smoke">
            Physical Card
          </span>
        </button>
        <button className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition-colors">
          <Send size={24} className="text-burnt-ember mb-2" />
          <span className="text-sm font-bold text-hearth-smoke">
            Digital Card
          </span>
        </button>
      </div>
      <h2 className="text-lg font-bold text-hearth-smoke mb-4">
        Gift Card Designs
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map(i => <div key={i} className="aspect-video bg-burnt-ember/10 rounded-lg shadow-sm hover:bg-burnt-ember/20 transition-colors" />)}
      </div>
    </div>;
}