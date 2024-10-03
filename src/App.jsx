import "./App.css";
import { FooterNav } from "./components/footerNav.jsx";
import Home from "./components/home.jsx";
// import { Search } from './components/search.jsx'

function App() {
  return (
    <div className="w-screen h-screen">
      <Home />
      <FooterNav />

      {/* <Search /> */}
    </div>
  );
}

export default App;
