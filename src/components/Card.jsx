import React from 'react'

export default function Card(props) {
  return (
  
    <div className='scroll-snap-child'>

<div className={`my-8 rounded-xl overflow-hidden relative object-cover flex`} style={{ height: props.height, width: props.width }}>

          <img src={props.image} alt=""
          className="rounded-xl object-cover" style={{ height: props.height, width: props.width , objectPosition: '0% 30%' }}
          />
          <div className="custom-background absolute left-0 top-0 flex flex-col items-start justify-end py-3 px-5 h-full w-full">
             <h1 className='text-white font-semibold'>{props.text}</h1>
          </div>
        </div>

      
    </div>

  )
}


//hehe