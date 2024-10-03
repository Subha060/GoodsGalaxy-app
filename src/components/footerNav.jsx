import React, { useState } from "react";
import "../App.css";

export const FooterNav = (params) => {
  const [selectedItem, setSelectedItem] = useState('home');

  const toggle = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-20 w-screen fixed bottom-0 left-0 rounded-t-3xl bg-white shadow-custom flex pt-2 items-center z-10">
      <ul className="flex justify-evenly items-end w-full">
        <li>
          <a
            href="#"
            className="flex gap-3 items-center"
            onClick={() => toggle("home")}
          >
            <img src="images/home.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "home" ? "show" : ""
              }`}
            >
              Home
            </h1>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex gap-3 items-center"
            onClick={() => toggle("account")}
          >
            <img src="images/user.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "account" ? "show" : ""
              }`}
            >
              Account
            </h1>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-3 items-center"
            onClick={() => toggle("shop")}
          >
            <img src="images/shop.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "shop" ? "show" : ""
              }`}
            >
              Shop
            </h1>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-3 items-center"
            onClick={() => toggle("wishlist")}
          >
            <img src="images/heart.svg" alt="" />
            <h1
              className={`transition-text ${
                selectedItem === "wishlist" ? "show" : ""
              }`}
            >
              Wishlist
            </h1>
          </a>
        </li>
      </ul>
    </div>
  );
};
