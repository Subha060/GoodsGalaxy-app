import '/src/App.css'
import React from "react";
import NavBar from "./NavBar.jsx";
import CardView from "./HeroCardView.jsx";
import Card from "./Card.jsx";
import Categories from "/src/assets/Categories.js"
import MusicCard from './MusicCard.jsx';
import names from '/src/assets/temp.js'

export default function Home () {

  return (
    <div className=" min-h-screen w-screen px-6 relative py-7 flex flex-col ">
      <NavBar />

      <h1 className=' mt-10 -mb-4 text-xl font-medium'>
        Top Picks</h1>
        <div className='scroll-snap scroll-smooth flex gap-4 overflow-x-scroll rounded-xl' >
        {
          Categories.map((Categorie, index) => {
            return <CardView width = "88vw" height = "186px" image = "./heroImg.svg" />
          })
        }
        </div>
    <h1 className='text-xl font-medium'>Popular Categories</h1>
    
    <div className='scroll-snap flex gap-4 overflow-x-scroll rounded-xl'>

    {

      Categories.map((Categorie, index) => {
        return <Card key={index} width = "260px" height = "140px" image = {`${Categorie.image}`} text = {`${Categorie.text}`} />
      })
    }

    </div>

    {/* <div className='overflow-x-scroll grid-custom py-4 px-0.5'>
      {
        names.map((n, index) => {
          return (
            <div className='bg-red-400'>
              <MusicCard n/>
            </div>
          );
        })
      }
    </div> */}

    </div>
  );
}

