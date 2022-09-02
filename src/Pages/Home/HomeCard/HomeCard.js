import React, { useState } from 'react'
import {AiOutlineHeart,AiFillStar, AiFillHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { getRoomList } from '../../../Slices/roomSlice'
import { useNavigate } from 'react-router-dom'

import cn from 'classnames'
import './HomeCard.scss'
export default function HomeCard(props) {
    const {position}= props
    const navigate = useNavigate()
    const [isHeart,setIsHeart] = useState(false)
    const dispatch = useDispatch()
    const handleErrorImage = (e)=>{
  e.target.src = 'https://i.pinimg.com/originals/8f/0f/1a/8f0f1a58f61495c4d27bec21c31d7a28.gif'
    }
  return (
    <div onClick={()=>{
      dispatch(getRoomList(position._id))
      navigate('/rooms?position='+position._id)
    }} className="my-6 homeCard hover:-translate-y-2 hoverDn  overflow-hidden rounded-xl relative cursor-pointer wow animate__animated animate__zoomInUp zoomInUp" >
    <div className='image'>

                    <img src={position.image || `https://picsum.photos/300/300` } alt="" className='w-full h-full rounded-xl' onError={handleErrorImage} />
    </div>
                    <span  style={{position:'absolute',top:'4%',right:'4%'}}>
                <AiOutlineHeart onClick={(e)=>{
                  e.stopPropagation()
                  setIsHeart(!isHeart)
                }} className={cn('text-2xl text-primary',{
                  hidden : isHeart
                })}/>
                <AiFillHeart onClick={(e)=>{
                  e.stopPropagation()
                  setIsHeart(!isHeart)
                }} className={cn('text-2xl text-primary',{
                  hidden : !isHeart
                })}/>
                
            </span>
            <div>
            <div className="flex justify-between mt-2 ">
                    <h2 className='font-semibold text-base inline-block m-0'>{position.name || 'Khu du lịch'}</h2>
                    <span>
                    <AiFillStar className='inline-block' />
                    {position.valueate /2 || 5}</span>

            </div>
            <p className="m-0 text-gray-500">{position.province || 'Hải Phòng'}</p>
            <p className="m-0 text-gray-500">{position.country || 'Việt Nam'}</p>
            <p className="mt-4">
              <span className="py-2 px-6 font-medium hoverDn hover:bg-primary hover:text-white text-base text-primary rounded-md" style={{border:'1px solid #ff385c'}}>Xem phòng</span>
            </p>
                </div>
            </div>
  )
}
