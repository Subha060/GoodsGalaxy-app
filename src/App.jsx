import "./App.css";
import { FooterNav } from "./components/footerNav.jsx";
import Home from "./components/home.jsx";
import Account from "./pages/Account.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Favourite.jsx";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
      <FooterNav />
    </div>
  );
}

export default App;
