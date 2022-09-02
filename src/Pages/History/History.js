import React, { useEffect, useState,useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getTicketsByUser } from '../../Slices/ticketSlice'
import { TOKEN, USER_LOGIN } from '../../Util/config'

import {  Modal } from 'antd';

import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import HistoryItem from './HistoryItem/HistoryItem'
import { AiFillHeart } from 'react-icons/ai'
import { deleteDanhGia, getRatesForRoom, putCapNhapDanhGia } from '../../Slices/rateSlice'
import BackToHome from '../../Components/BackToHome/BackToHome';
export default function History() {
    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem(USER_LOGIN)).user._id
    const commentRef = useRef()
    // const navigate = useNavigate()
    const {ticketArray} = useSelector(state=>state.ticket)
    const {rateArray} = useSelector(state=>state.rate)
    const [maDanhGia,setDanhGia ]= useState()
   
    const [isModalVisible, setIsModalVisible] = useState(false);
   
   
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    
    const handleCancel = () => {
      setIsModalVisible(false);
    };
       const [image,setImage] = useState();
   const [maPhong,setMaPhong]= useState()
    const yourRate = rateArray.filter((rate)=>{
      return rate.userId?._id === userId 
    })
  

  
   
   var handleConsoleId = (id,imageUrl)=>{
     
    
     
     setImage(imageUrl);
     setMaPhong(id)
     showModal();
     
     dispatch(getRatesForRoom(id))
    
    }
    
    
    
    const lengthArray = ticketArray.length
    
   const [lengthState,setLengthState] = useState(9)
  
    useEffect(()=>{
        dispatch(getTicketsByUser(userId))
    },[userId])
    
    const renderTicketItem = ()=>{
  
    if(lengthArray >9){
      return ticketArray.slice().reverse().slice(0,lengthState).map((ticket,index)=>{
        return <HistoryItem handleConsoleId={handleConsoleId}  key={index} ticket={ticket}/>

        
      })
    }else {
      return ticketArray?.slice().reverse().map((ticket,index)=>{
        return <HistoryItem handleConsoleId={handleConsoleId} key={index} ticket={ticket}/>

        
      })
    }
  }
  return (
   <section className="text-gray-600 body-font bg-white pb-5 relative">
  <div className="container px-5 pt-24 pb-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <div className="w-2/12 mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
      </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-primary text-lg font-medium mt-2">Kiểm tra lại vé của bạn và có những phút giây tuyệt vời nhé !!!
      <span><AiFillHeart className='inline-block'/></span>
      <span><AiFillHeart className='inline-block'/></span>
      <span><AiFillHeart className='inline-block'/></span>
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      {renderTicketItem()}
    </div>
  </div>
  <div className="text-center ">

                        {lengthArray > 9 && lengthArray > lengthState? <button onClick={()=>setLengthState((preState)=>{
                            return preState + 9
                        })} className={cn("py-3 px-5 rounded-md hvr-bob text-primary font-medium text-lg")} style={{border:'1px solid #ff385c'}}>Xem thêm...</button>:""}
                        {lengthState > lengthArray &&lengthArray !==0 && lengthArray >9?<button style={{border:'1px solid #ff385c'}} onClick={()=>setLengthState(4)} className="py-3 px-5 rounded-md hvr-bob text-primary font-medium text-lg">Rút gọn</button>:''}
                    </div>
                     <Modal   footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
            <div className="grid grid-cols-5 mt-8">
                <div className='col-span-5 h-60 '>
                      <img src={image} className="w-full h-full rounded-xl" alt="" />
                </div>
                <div className="col-span-5 h-52 overflow-y-scroll mt-4 ">
                      {yourRate.map((rate,index)=>{
                        return (
                          <div className='my-3 rounded-md py-1 flex justify-between ' key={index} style={{border:'1px solid #ff385c'}}>
                            <input  ref={commentRef} type="text" defaultValue={rate.content || ""} className='w-9/12 outline-none p-2 '/>
                            <div>

                            <span onClick={()=>{
                              dispatch(putCapNhapDanhGia({
                                content : commentRef.current.value,
                                maDanhGia : rate._id,
                                maPhong : maPhong,
                                userId : userId
                              }))
                              commentRef.current.disabled = true
                              
                            }} className="inline-block cursor-pointer p-2 bg-green-500 rounded-lg ml-2 text-white text-base font-medium hover:bg-green-600 transition-all duration-300">Sửa</span>
                            <span onClick={()=>{
                              
                              dispatch(deleteDanhGia({
                                maDanhGia : rate?._id,
                                maPhong : maPhong
                              }))
                              // window.location.reload()
                            }} className="inline-block p-2 cursor-pointer bg-red-500 rounded-lg mx-2 text-white text-base font-medium hover:bg-red-600 transition-all duration-300">Xóa</span>
                            </div>
                          </div>
                        )
                      })}
                </div>
            </div>
      </Modal>
      <BackToHome/>
</section>
  )
}
