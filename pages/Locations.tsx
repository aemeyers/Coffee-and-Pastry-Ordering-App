import React, { useEffect } from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
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
export function Locations() {
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
  }, {
    id: 3,
    name: "Fondren Brim & Smoke",
    address: "2906 North State Street, Jackson, MS 39216",
    distance: "2.4",
    hours: "6:30 AM - 8:00 PM",
    phone: "(601) 555-3456",
    coordinates: [32.327875, -90.177003] // Fondren coordinates
  }, {
    id: 4,
    name: "Coast Brim & Smoke",
    address: "125 Main Street, Biloxi, MS 39530",
    distance: "3.8",
    hours: "7:00 AM - 8:30 PM",
    phone: "(228) 555-7890",
    coordinates: [30.396032, -88.885308] // Biloxi coordinates
  }];
  const mississippiCenter = [32.354668, -89.398528];
  const handleGetDirections = coordinates => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`);
  };
  return <div className="px-4 py-6">
      <h1 className="text-2xl font-playfair text-hearth-smoke mb-6">
        Find a Store
      </h1>
      <div className="mb-6 h-[300px] rounded-lg overflow-hidden shadow-md">
        <MapContainer center={mississippiCenter} zoom={7} style={{
        height: "100%",
        width: "100%"
      }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {stores.map(store => <Marker key={store.id} position={store.coordinates}>
              <Popup>
                <div className="font-eb-garamond">
                  <h3 className="font-bold">{store.name}</h3>
                  <p className="text-sm">{store.address}</p>
                  <p className="text-sm">{store.hours}</p>
                </div>
              </Popup>
            </Marker>)}
        </MapContainer>
      </div>
      <div className="mb-6">
        <div className="relative">
          <input type="text" placeholder="Search by zip code or city" className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-hearth-smoke placeholder-hearth-smoke/50" />
          <MapPin className="absolute left-3 top-2.5 text-hearth-smoke/50" size={20} />
        </div>
      </div>
      <div className="space-y-4">
        {stores.map(store => <div key={store.id} className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-bold text-hearth-smoke font-eb-garamond">
                {store.name}
              </h2>
              <div className="flex items-center text-clove">
                <Navigation size={16} className="mr-1" />
                <span className="text-sm">{store.distance} mi</span>
              </div>
            </div>
            <p className="text-hearth-smoke/70 text-sm mb-3 font-cormorant">
              {store.address}
            </p>
            <div className="space-y-2 text-sm text-hearth-smoke/70">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-clove" />
                <span>{store.hours}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-clove" />
                <span>{store.phone}</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-burnt-ember text-white rounded-md font-bold hover:bg-oxblood transition-colors" onClick={() => handleGetDirections(store.coordinates)}>
              Get Directions
            </button>
          </div>)}
      </div>
    </div>;
}