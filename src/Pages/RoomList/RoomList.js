import React, { useEffect, useRef } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {useSearchParams} from 'react-router-dom'
import { getRoomList } from '../../Slices/roomSlice'
import RoomItem from './RoomItem/RoomItem'
export default function RoomList() {
    const [locationId,setLocationId] = useSearchParams()
    const param = locationId.get("position")
    const {roomArray} = useSelector((state)=>state.room)
    const dispatch  = useDispatch()
    
    useEffect(()=>{
        dispatch(getRoomList(param))
    },[param])
    const renderRoom = ()=>{
        return roomArray?.map((room,index)=>{
            return <RoomItem key={index} room={room}/>
        } )
    }
  return (
    <div className='grid grid-cols-12 my-12 '>
        <div className="lg:col-span-6 lg:col-start-2 col-start-2 col-span-10 mt-10 p-3">
         <div className="pb-5 mb-5 border-red-50" style={{borderBottom:'1px solid #ccc'}}>
               <p className="text-gray-500">Hơn 30.000 chỗ ở kể từ 17/8/2022</p>
            <h1 className="font-semibold text-lg mb-5">Chỗ ở tại khu vực bản đồ đã chọn</h1>
            <div className="mb-2">
                <span className="inline-block mt-2 py-2 px-3 rounded-full mr-2 cursor-pointer transition-all duration-200 hover:scale-105" style={{border:'1px solid #ccc',boxShadow:'0 2px 3px rgba(0,0,0,0.1)'}}>Loại nơi ở</span>
                <span className="inline-block mt-2 py-2 px-3 rounded-full mr-2 cursor-pointer transition-all duration-200 hover:scale-105" style={{border:'1px solid #ccc',boxShadow:'0 2px 3px rgba(0,0,0,0.1)'}}>Giá</span>
                <span className="inline-block mt-2 py-2 px-3 rounded-full mr-2 cursor-pointer transition-all duration-200 hover:scale-105" style={{border:'1px solid #ccc',boxShadow:'0 2px 3px rgba(0,0,0,0.1)'}}>Đặt ngay</span>
                <span className="inline-block mt-2 py-2 px-3 rounded-full mr-2 cursor-pointer transition-all duration-200 hover:scale-105" style={{border:'1px solid #ccc',boxShadow:'0 2px 3px rgba(0,0,0,0.1)'}}>Phòng và phòng ngủ</span>
                <span className="inline-block mt-2 py-2 px-3 rounded-full mr-2 cursor-pointer transition-all duration-200 hover:scale-105" style={{border:'1px solid #ccc',boxShadow:'0 2px 3px rgba(0,0,0,0.1)'}}>Bộ lọc khác</span>
            </div>
         </div>
           {renderRoom()}

        </div>
        <div className="animate__animated animate__backInRight col-span-4 col-start-8 hidden lg:block pl-3  mt-10 " style={{minHeight:'800px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.1992995518522!2d106.68672325805109!3d20.855978196523065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a8d56e71957%3A0x4774774e62496faa!2zR2EgSGHMiWkgUGhvzIBuZywgNzUgUC4gTMawxqFuZyBLaMOhbmggVGhp4buHbiwgTMawxqFuZyBLaMOhIFRoaWVuLCBOZ8O0IFF1eeG7gW4sIEjhuqNpIFBow7JuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1660790179023!5m2!1svi!2s"  style={{border: 0,width:'100%',height:'100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKFUqTv_mNGQxS_7XguWYkc2jcm8vl79U&callback=initMap" async defer></script> */}

        </div>
    </div>
  )
}
