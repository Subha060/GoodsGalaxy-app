import React, { useState } from 'react'

export default function ButtomLIstCard() {
    const [extend, setExtend] = useState(false)
    const setMode = () => {
        setExtend(!extend)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
  return (
    <div className={`w-full transition-scale flex py-1 pr-2 ${extend === true ? "h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col px-1.5 gap-2 backdrop-blur-xl" : "item-center justify-start gap-7 border-y border-black mb-1 h-24" }`}
    onClick={setMode}>
      <img src="./amazon_logo.svg" alt="" className={`h-20 ${extend === true ? "h-96 w-full bg-red-100 " : ""}`} />
      <div className={` ${extend === true ? "px-3" : ""}`}>
        <h2 className={`capitalize font-bold text-wrap  ${extend === true ? " text-2xl " : "text-lg"}`}>name of the product</h2>
        <div className='flex flex-col'>
        <p className={`${extend === true ? " text-xl " : "text-base"}`}>rating</p>
        <p className={`${extend === true ? " text-xl " : "text-base"}`}>50000</p>
        </div>
      </div>
    </div>
  )
}
