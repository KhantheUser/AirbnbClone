import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

export default function BackToTop() {
  return (
      <div onClick={()=>window.scrollTo(0,0)} style={{width:'40px',height:'40px',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',bottom:'4%',right:'2%',zIndex:'3'}} className="rounded-md flex justify-center items-center text-white cursor-pointer">
            <AiOutlineDown className="text-lg hover:text-yellow-400  hover:rotate-180 transition-all duration-300"/>
         </div>
    
  )
}
