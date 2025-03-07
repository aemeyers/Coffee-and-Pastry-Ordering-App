import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { Profile } from "./pages/Profile";
import { OrderHistory } from "./pages/OrderHistory";
import { Rewards } from "./pages/Rewards";
import { Locations } from "./pages/Locations";
import { GiftCards } from "./pages/GiftCards";
import { Notifications } from "./pages/Notifications";
import { Header } from "./components/Header";
import { BottomNavigation } from "./components/BottomNavigation";
function AppContent() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const addToCart = (product, quantity = 1, options = {}) => {
    const cartItem = {
      ...product,
      quantity,
      options,
      id: `${product.id}-${Date.now()}`
    };
    setCart([...cart, cartItem]);
  };
  const removeFromCart = cartItemId => {
    setCart(cart.filter(item => item.id !== cartItemId));
  };
  const updateQuantity = (cartItemId, newQuantity) => {
    setCart(cart.map(item => item.id === cartItemId ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  const navigateToPage = page => {
    navigate(`/${page}`);
  };
  return <div className="flex flex-col h-screen bg-white">
      <Header cartItemCount={cart.length} navigateToCart={() => navigate("/cart")} navigateToHome={() => navigate("/")} />
      <main className="flex-1 overflow-auto pb-16">
        <Routes>
          <Route path="/" element={<Home navigateToMenu={() => navigate("/menu")} navigateToProduct={product => navigate(`/product/${product.id}`)} />} />
          <Route path="/menu" element={<Menu navigateToProduct={product => navigate(`/product/${product.id}`)} />} />
          <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} goBack={() => navigate("/menu")} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} navigateToCheckout={() => navigate("/checkout")} />} />
          <Route path="/checkout" element={<Checkout cart={cart} navigateToConfirmation={() => navigate("/confirmation")} />} />
          <Route path="/confirmation" element={<OrderConfirmation navigateToHome={() => {
          navigate("/");
          setCart([]);
        }} />} />
          <Route path="/profile" element={<Profile navigateToPage={navigateToPage} />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/rewards" element={<Rewards navigateToPage={navigateToPage} />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gifts" element={<GiftCards />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <BottomNavigation currentPage={window.location.pathname.substring(1) || "home"} setCurrentPage={navigateToPage} />
    </div>;
}
export function App() {
  return <BrowserRouter>
      <AppContent />
    </BrowserRouter>;
}