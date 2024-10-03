import '../App.css'
import React from "react";
import { FooterNav } from "./footerNav.jsx";
import NavBar from "./NavBar.jsx";
import CardView from "./HeroCardView.jsx";
import Card from "./Card.jsx";
import Categories from "../assets/Categories.js"

export default function Home() {
  return (
    <div className=" h-screen w-screen px-6 relative py-7 flex flex-col">
      <NavBar />
    <CardView width = "100%" height = "186px" image = "images/heroimg.svg" />
    <h1 className='text-xl font-medium'>Popular Categories</h1>
    
    <div className='flex gap-4 overflow-x-scroll' >
    
    {
      Categories.map((Categorie) => {
        return <Card width = "260px" height = "140px" image = {`${Categorie.image}`} text = {`${Categorie.text}`} />
      })
    }

    </div>
      <FooterNav />
    </div>
  );
}

