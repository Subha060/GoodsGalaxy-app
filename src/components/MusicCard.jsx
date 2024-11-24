import React from 'react'

export default function MusicCard(props) {
  return (
    <div className='w-[80vw] border rounded-lg ring-slate-600 ring-1 flex items-center gap-5 px-4 py-2'>
      <img src="/amazon_logo.svg" alt=""  className='w-1/5 h-full' />
      <div>
        <h1 className='text-md font-bold'>Take Me Away</h1>
        <h3 className='text-sm'>Details</h3>
        <h3 className='text-[10px]'>Length: {props.n}</h3>
      </div>
    </div>
  )
}
