import React ,{useEffect, useRef,useState,memo} from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import {  Modal } from 'antd';
import { useDispatch,useSelector } from 'react-redux'
import { getRatesForRoom, postDanhGia } from '../../../Slices/rateSlice'

 function HistoryItem(props) {
    const navigate = useNavigate()
    const {ticket,handleConsoleId} = props
    const dispatch = useDispatch()
    const danhGiaRef = useRef()
  return (
     <div onClick={()=>{
              // navigate(`/rooms/details/${ticket.roomId._id}`)
          
         }}  className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer animate__backInUp  animate__animated ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.roomId?.image || "https://i.pinimg.com/originals/8f/0f/1a/8f0f1a58f61495c4d27bec21c31d7a28.gif"} />
          <div className="flex-grow">
            <h2 className=" title-font font-medium mb-2 text-red-500">{ticket?.roomId?.name}</h2>
            <p className="mb-1"><span className="text-gray-700 font-semibold "> Ngày đi :</span><span className="ml-2 text-red-500">{dayjs(ticket.checkIn).format('DD/MM/YYYY')}</span></p>
            <p className="mb-1"><span className="text-gray-700 font-semibold "> Ngày về :</span><span className="ml-2 text-red-500">{dayjs(ticket.checkOut).format('DD/MM/YYYY')}</span></p>
            <div className="flex items-center">

            <div style={{border:'1px solid #ccc'}} className="rounded-lg w-10/12 ">
            <input ref={danhGiaRef} onKeyDown={(e)=>{
                              if(e.key==='Enter'){
                                dispatch(postDanhGia({
              roomId : ticket?.roomId._id,
              content : danhGiaRef.current.value
            }))
            danhGiaRef.current.value = ""
                              }
                            }} type="text" className="w-full outline-none p-3" placeholder='Để lại đánh giá của bạn' />
              
            </div>
            <span onClick={()=>{
              dispatch(postDanhGia({
              roomId : ticket?.roomId._id,
              content : danhGiaRef.current.value
            }))
            danhGiaRef.current.value = ""
            }} className="inline-block p-3 bg-red-500 rounded-lg ml-2 text-white text-base font-medium hover:bg-red-600 transition-all duration-300">Save</span>
             <span onClick={()=>{
              handleConsoleId(ticket?.roomId._id,ticket?.roomId?.image)
              
              
             }} className="inline-block p-3 bg-blue-500 rounded-lg ml-2 text-white text-base font-medium hover:bg-blue-600 transition-all duration-300">Edit</span>
            </div>
          </div>
        </div>
       
      </div>
  )
}
export default memo(HistoryItem)
