import React, { useState } from "react";
import Menu from "./Menu.jsx";
import "../App.css";
import SearchBox from "./search.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="flex justify-between items-center overflow-hidden">
        <div className="flex gap-2 justify-center items-center">
          <img src="./profile.svg" alt="" className="h-12 w-12" />
          <div className="text-left text-sm">
            <h3 className="font-bold text-lg">Hello Mika!</h3>
            <h3 className="text-[#AEB1C1]">Good Morning!</h3>
          </div>
        </div>

        <div className="flex gap-5">
          <SearchBox />
          <img
            src="./menuButton.svg"
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};

{
  /** HamBurgar menu */
}

export default NavBar;
