import React, { useState } from "react";
import "/src/App.css";
import { NavLink,useLocation } from "react-router-dom";

export const FooterNav = (params) => {
  const [selectedItem, setSelectedItem] = useState('/');

  const location = useLocation();

  const activeFooter = () => {
    if (location.pathname === "/" || location.pathname === "/account" || location.pathname === "/library" || location.pathname === "/favourite") {
      const locationPath = location.pathname;
      setSelectedItem(locationPath)
    }
  };
  React.useEffect(() => {
    activeFooter();
  }, [location]);


  return (
    <div className="h-20 w-screen fixed bottom-0 left-0 rounded-t-3xl bg-white shadow-custom flex pt-2 items-center z-10">
      <ul className="flex justify-evenly items-end w-full">
        <li>
          <NavLink to={"/"}
            className="flex gap-3 items-center"
          >
            <img src="./home.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "/" ? "show" : ""
              }`}
            >
              Home
            </h1>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/account"}
            className="flex gap-3 items-center"
          >
            <img src="./user.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "/account" ? "show" : ""
              }`}
            >
              Account
            </h1>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/library"}
            className="flex gap-3 items-center"
          >
            <img src="./library.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "/library" ? "show" : ""
              }`}
            >
              library
            </h1>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favourite"}
            className="flex gap-3 items-center"
          >
            <img src="./heart.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "/favourite" ? "show" : ""
              }`}
            >
              Favourite
            </h1>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
