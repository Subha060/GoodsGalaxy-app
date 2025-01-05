import "./App.css";
import { FooterNav } from "./components/footerNav.jsx";
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
