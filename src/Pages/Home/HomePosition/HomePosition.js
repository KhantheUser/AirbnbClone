import React from 'react'
import HomeCard from '../HomeCard/HomeCard'
import { useSelector } from 'react-redux'
export default function HomePosition() {
    const {positionArray} = useSelector((state)=>state.position)
    const renderPositionList = ()=>{
return (
    <>
    
<div className="flex justify-between flex-wrap py-10">
           
            {positionArray?.slice(0,48).map((position,index)=>{
                return (
                    <HomeCard key={index} position={position}/>
                )
            })}
        </div>
        </>
)

    }
  return (
    <div className='homePosition '>
        {renderPositionList()}
    </div>
  )
}
