import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import roomAPI from '../../../Services/roomAPI'

export default function RoomItem(props) {
    const {room}= props
    

   
    const navigate = useNavigate()
    
  return (
    <div className="grid animate__animated animate__backInLeft wow grid-cols-5 mt-8  cursor-pointer" onClick={()=>navigate(`details/${room._id}`)}>
               <div className="sm:col-span-2  col-span-5 rounded-xl overflow-hidden sm:h-44 h-72" style={{boxShadow:' 0 0 2px 4px rgba(0,0,0,0.3)'}}>
                 <img className='h-full w-full' src={room.image || 'https://kconceptvn.com/wp-content/uploads/2020/04/hotel-photography-chup-anh-khach-san-resort-kk-hotel-sapa-khach-san-kk-169-1.jpg'} alt="" />
               </div>
               <div className="relative col-span-5 mt-3 sm:mt-0 sm:col-span-3 sm:pl-4  flex flex-col justify-between">
               <div className="">
                     <p className="text-gray-500 m-0">Toàn bộ căn phòng tại {room.locationId?.province}</p>
                <h1 className="text-base my-2 ">{room.name}</h1>
                <p className="m-0 mt-3">{room.guests} khách - {room.bedRoom} phòng ngủ - {room.bath} phòng tắm</p>
                <p className='text-gray-500'>
                
                {room.elevator && 'Thang máy , '}
                {room.hotTub && ' Tắm hơi ,'}
                {room.pool && ' Bể bơi ,'}
                {room.wifi && ' Wifi ,'}
                {room.indoorFireplace && " Bếp sưởi ,"}
                {room.kitchen && " Bếp ,"}
                {room.dryer && ' Máy giặt ,'}
                {room.gym && ' Phòng gym ,'}
                {room.heating && ' Bình nóng lạnh ,'}
                {room.cableTV && ' Tivi cáp '}

                </p>
               </div>
               <h1 className="m-0 text-right font-semibold">{`$${room.price}`}<span className='font-normal '> / tháng</span></h1>
               <span style={{position:'absolute',right:'0',top:'1%'}}>
                <AiOutlineHeart className='text-xl'/>
               </span>
               </div>
               
            </div>
  )
}
