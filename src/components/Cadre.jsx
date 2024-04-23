import Image from 'next/image'
import React from 'react'
import "./Cadre_Mod.css"

export default function Cadre({props}) {
  return (
    <div className='cadre-container'>
      {props.map((item)=>{
        return <div className='cadre-col'>
            <Image className='img' src={item.image} alt="Cadre" width={100} height={100}/>
            <h1 className='h1'>{item.title}</h1>
            <p className='p'>{item.text}</p>
            <hr className='hr'/>
        </div>
      })}
     
    </div>
  )
}
