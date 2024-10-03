import React from 'react'

export default function CardView(props) {
  return (
    <div>

        
<div className={`my-8 rounded-xl overflow-hidden relative bg-cover`} style={{ height: props.height, width: props.width }}>
          <img src={props.image} alt=""
          className="rounded-xl object-cover " style={{ height: props.height, width: props.width }}
          />
          <div className="custom-background absolute left-0 top-0 flex flex-col items-start justify-between py-9 px-5 h-full w-full">
              <img src="src/images/amazon_logo.svg" alt="" 
              className="w-8 h-8 bg-white rounded-xl bg-contain p-1" />
              <p className="font-medium drop-shadow-sm ">
                Discover Your <br/> Beauty Select
              </p>
              <button className="bg-black text-white px-3 py-0.5 rounded-2xl text-center">
                Shop Now
              </button>
          </div>
        </div>

      
    </div>
  )
}
