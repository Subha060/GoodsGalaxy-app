import '/src/App.css'
import React, { useState } from "react";
import NavBar from "/src/components/NavBar.jsx";
import CardView from "/src/components/HeroCardView.jsx";
import Card from "/src/components/Card.jsx";
import Categories from "/src/assets/Categories.js"
import { headers } from '/src/assets/ButtomHeaders.js';
import ButtomLIstCard from '../components/ButtomLIstCard';

export default function Home () {
  const [show, setShow] = useState("For You")

  return (
    <div className=" min-h-screen w-screen px-6 relative py-7 flex flex-col">
      <NavBar />
        <div className='scroll-snap scroll-smooth flex gap-4 overflow-x-scroll rounded-xl' >
        {
          Categories.map((Categorie, index) => {
            return <CardView width = "88vw" height = "186px" image = "./heroImg.svg" />
          })
        }
        </div>
        <div className='flex justify-between'>
    <h1 className='text-xl font-medium'>Popular Categories</h1>
    <h4 className='text-[#AEB1C1] custom-hover'>See all</h4>
        </div>
    
    <div className='scroll-snap flex gap-4 overflow-x-scroll rounded-xl'>

    {

      Categories.map((Categorie, index) => {
        return <Card key={index} width = "260px" height = "140px" image = {`${Categorie.image}`} text = {`${Categorie.text}`} />
      })
    }

    </div>

    <ul className='flex justify-between text-[#AEB1C1] ease-in-out'>
      {
        headers.map((header, i) => {
          return <li
          key={i}
        className={`${show === header.name ? "text-black font-medium" : "text-[#AEB1C1] font-normal"}`}
        onClick={()=>setShow(header.name)}
        >{header.name}</li>
        })
      }
    </ul>
    <div className={` flex flex-col items-center py-2 w-full h-[450px] mt-5 rounded-2xl overflow-hidden ${checkButtomHeaders(show)}`}>
      {/* {checkButtomHeaders(show)} */}
      <ButtomLIstCard />
      <ButtomLIstCard />
      <ButtomLIstCard />
      <ButtomLIstCard />
    </div>

    </div>
  );
}

const checkButtomHeaders = (value = "") => {
  if (value === "For You") {
    // return "bg-red-300"
  } else if (value === "New Gadget") {
    // return "bg-blue-300"
  } else if (value === "Best Selling") {
    // return "bg-green-300"
  } else {
    // return "bg-yellow-300"
  }
}