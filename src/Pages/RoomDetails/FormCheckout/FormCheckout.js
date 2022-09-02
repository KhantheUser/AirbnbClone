import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import Datepicker from "../../../Components/Datepicker/Datepicker";
import { useDispatch ,useSelector} from "react-redux";
import { handleModal, postDatPhong } from "../../../Slices/roomSlice";
import {  Modal } from 'antd';
import { useNavigate } from "react-router-dom";
import './FormCheckout.scss'
import { TOKEN } from "../../../Util/config";
export default function FormCheckout(props) {
    const navigate = useNavigate();
    const {isSuccessTicket} = useSelector(state=>state.room)
    
     const handleOk = () => {
    dispatch(handleModal())
    navigate('/history')
    
  };

  const handleCancel = () => {
     dispatch(handleModal())
    navigate('/history')

  };
  const { roomDetails, rateArray } = props;
  const dispatch = useDispatch()
  const [day, setDays] = useState(0);
  const [thongTinDatPhong, setThongTinDatPhong] = useState({})
  const handleChangeDay = (day,thongTinDatPhong) => {
    setDays(day);
    setThongTinDatPhong({...thongTinDatPhong,roomId : roomDetails._id});
  };
 
  return (
    <div className="md:col-start-9 mt-8 md:mt-0 md:col-span-4 formCheckout col-span-12   ">
      <div className="sticky top-20">
        <div
          className="w-full p-6 rounded-xl"
          style={{
            border: "1px solid #ccc",
            boxShadow: "0 2px 10px 2px rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex align-baseline ">
              <h1 className="text-xl m-0 font-semibold">
                {roomDetails.price} <span className="underline">đ</span>
              </h1>
              <span className="ml-1 text-gray-500" style={{ lineHeight: "2" }}>
                /đêm
              </span>
            </div>
            <div className="flex items-center ">
              <span>
                <AiFillStar className="text-base text-primary " />
              </span>
              <span className="font-medium ml-1">
                {roomDetails.locationId?.valueate / 2} ·{" "}
              </span>
              <span className="underline text-gray-500 font-medium">
                {rateArray.length} đánh giá
              </span>
            </div>
          </div>
          <div className=" mt-5">
            <Datepicker handleChangeDay={handleChangeDay} />
            <div
              className="p-3 rounded-bl-lg rounded-br-lg"
              style={{ border: "2px solid #ff385c", borderTop: "0" }}
            >
              <h1>Khách</h1>
            </div>
            <button onClick={()=>{
                if(!localStorage.getItem(TOKEN) ){
                  navigate('/login')
                    
                }else {
                  if(day>0){

                    dispatch(postDatPhong(thongTinDatPhong))
                    }else return
                }
                
                
            }} className="w-full mt-4 rounded-md cursor-pointer hover:bg-red-500 transition-all duration-300 text-center p-3 bg-primary text-white text-base font-medium">
              Đặt phòng
            </button>
            <p className="text-center mt-4">Bạn vẫn chưa bị trừ tiền</p>
            <div>
              <div className="flex justify-between text-base  font-normal">
                <span className="  ">
                  {roomDetails.price} <span className="underline">đ</span> x{" "}
                  {day} đêm
                </span>
                <span className=" text-primary">
                  {roomDetails.price * day} <span className="underline">đ</span>
                </span>
              </div>
              <div
                className="flex justify-between text-base font-normal mt-3 pb-5 "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <span>Phí dịch vụ</span>
                <span className=" text-primary">0 đ</span>
              </div>
            </div>
            <div className="flex justify-between text-base pt-5 font-medium">
              <span>Tổng trước thuế</span>
              <span className=" text-primary">
                {roomDetails.price * day} <span className="underline">đ</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="  mt-7 rounded-md p-6 flex justify-between"
          style={{
            border: "1px solid #ff385c",
            boxShadow: "0 0 4px 6px rgba(0,0,0,0.04)",
          }}
        >
          <p className="m-0 w-10/12 text-base">
            <span className="font-medium">Nơi này rất hiếm khi còn chỗ</span>
            .Chỗ ở của Thien Duc trên Airbnb thường kín phòng.
          </p>
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 32,
              width: 32,
              fill: "rgb(227, 28, 95)",
              stroke: "currentcolor",
            }}
          >
            <g stroke="none">
              <path
                d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z"
                fillOpacity=".2"
              />
              <path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z" />
            </g>
          </svg>
        </div>
      </div>
      <Modal  width={600} title={<div className="font-mono text-lg text-green-500">Bạn đã đặt vé thành công !!!</div>} visible={isSuccessTicket}  onOk={handleOk} onCancel={handleCancel}>
        <div >
            <img className="mx-auto" style={{width:'60%'}} src="https://olptienganh.vn/wp-content/uploads/2021/12/Hinh-dong-cam-on-dep-de-thuong-tao-cam-giac.gif" alt="" />
        </div>
      </Modal>
    </div>
  );
}
