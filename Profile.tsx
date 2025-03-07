import React from "react";
import { MapPin, Navigation, Clock, Phone, Share2 } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
export function Profile() {
  const stores = [{
    id: 1,
    name: "Downtown Brim & Smoke",
    address: "405 Capitol Street, Jackson, MS 39201",
    distance: "0.3",
    hours: "6:00 AM - 8:00 PM",
    phone: "(601) 555-4567",
    coordinates: [32.299076, -90.184052] // Jackson coordinates
  }, {
    id: 2,
    name: "Oxford Square Brim & Smoke",
    address: "1006 Van Buren Ave, Oxford, MS 38655",
    distance: "1.2",
    hours: "7:00 AM - 9:00 PM",
    phone: "(662) 555-5678",
    coordinates: [34.366495, -89.519147] // Oxford coordinates
  }];
  const mississippiCenter = [32.354668, -89.398528];
  const handleGetDirections = coordinates => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`);
  };
  const handleShare = async store => {
    const shareData = {
      title: store.name,
      text: `${store.name}\n${store.address}\n${store.hours}\n${store.phone}`,
      url: `https://www.google.com/maps/search/?api=1&query=${store.coordinates[0]},${store.coordinates[1]}`
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(`${shareData.text}\n\nLocation: ${shareData.url}`);
        alert("Location details copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  return <div className="px-2 py-1.5">
      <h1 className="text-lg font-playfair text-hearth-smoke mb-1.5">
        Find a Store
      </h1>
      <div className="mb-1.5 h-[180px] rounded-lg overflow-hidden shadow-sm">
        <MapContainer center={mississippiCenter} zoom={7} style={{
        height: "100%",
        width: "100%"
      }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {stores.map(store => <Marker key={store.id} position={store.coordinates}>
              <Popup>
                <div className="font-eb-garamond">
                  <h3 className="font-bold text-xs">{store.name}</h3>
                  <p className="text-xs">{store.address}</p>
                  <p className="text-xs">{store.hours}</p>
                </div>
              </Popup>
            </Marker>)}
        </MapContainer>
      </div>
      <div className="mb-1.5">
        <div className="relative">
          <input type="text" placeholder="Search by zip code or city" className="w-full pl-7 pr-2 py-1 bg-white border border-gray-200 rounded-lg text-xs text-hearth-smoke placeholder-hearth-smoke/50" />
          <MapPin className="absolute left-1.5 top-1 text-hearth-smoke/50" size={14} />
        </div>
      </div>
      <div className="space-y-1.5">
        {stores.map(store => <div key={store.id} className="bg-white rounded-lg shadow-sm p-1.5 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-0.5">
              <h2 className="font-bold text-xs text-hearth-smoke font-eb-garamond">
                {store.name}
              </h2>
              <div className="flex items-center text-clove">
                <Navigation size={12} className="mr-0.5" />
                <span className="text-xs">{store.distance} mi</span>
              </div>
            </div>
            <p className="text-hearth-smoke/70 text-xs mb-1 font-cormorant">
              {store.address}
            </p>
            <div className="space-y-0.5 text-xs text-hearth-smoke/70">
              <div className="flex items-center">
                <Clock size={12} className="mr-1 text-clove" />
                <span>{store.hours}</span>
              </div>
              <div className="flex items-center">
                <Phone size={12} className="mr-1 text-clove" />
                <span>{store.phone}</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-1.5">
              <button className="flex-1 py-1 bg-burnt-ember text-white rounded-md font-bold hover:bg-oxblood transition-colors text-xs" onClick={() => handleGetDirections(store.coordinates)}>
                Get Directions
              </button>
              <button className="px-3 py-1 bg-burnt-ember text-white rounded-md font-bold hover:bg-oxblood transition-colors text-xs flex items-center justify-center" onClick={() => handleShare(store)}>
                <Share2 size={14} />
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}