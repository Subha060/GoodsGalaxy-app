import NavList from "./navList.jsx";
import "../App.css";

import React from 'react'

const Menu = ({ toggleMenu, isMenuOpen }) => {
    return (
      <>
        <div
          className={`w-0 h-screen absolute left-0 top-0 blur-cutom z-20
     ${isMenuOpen ? "show" : ""} `}
     onClick={toggleMenu}
        ></div>
  
        <div
          className={`menu ${
            isMenuOpen ? "open" : ""
          } px-10 py-10 z-30 overflow-hidden`}
        >
          <img
            src="./back.svg"
            alt=""
            className="w-6 absolute right-5 top-5 rotate-180"
            onClick={toggleMenu}
          />
  
          <div className="mx-auto">
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center">
              <img src="./profile.svg" alt="" className="h-24 w-24" />
              <div className="text-center">
                <h3 className="font-bold text-lg">Mika Viano</h3>
                <h3 className="text-[#00A8E1] cursor-pointer">Edit Profile</h3>
              </div>
            </div>
          </div>
          <NavList />
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>Shop By Department</li>
              <li>Customer Service</li>
              <li>Settings</li>
            </ul>
            <div className="flex gap-3 py-6">
              <img src="./logout.svg" alt="" />
              <h1 className="font-semibold cursor-pointer">Logout</h1>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Menu;