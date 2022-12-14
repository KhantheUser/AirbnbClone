import React, { useEffect, useState } from "react";
import { SiGoogletranslate } from "react-icons/si";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from 'antd';

import {
  GiRank2,
  GiBoilingBubbles,
  GiPoolDive,
  GiGymBag,
  GiWashingMachine,
  GiHeatHaze,
  GiSmokeBomb
} from "react-icons/gi";
import { FiShare } from "react-icons/fi";
import { Progress } from "antd";
import {
  AiOutlineHeart,
  AiOutlineCalendar,
  AiFillStar,
  AiOutlineUser,
  AiOutlineWifi,
  AiOutlineFundProjectionScreen,
  AiFillClockCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import {
  MdOutlineCleaningServices,
  MdOutlineElevator,
  MdOutlineFireplace,
  MdLocalHospital
} from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { getRoomDetails } from "../../Slices/roomSlice";
import { getRatesForRoom } from "../../Slices/rateSlice";
import Comment from "./Comment/Comment";
import { IoLogoNoSmoking } from "react-icons/io";
import { MdPets } from "react-icons/md";
import cn from "classnames";
import FormCheckout from "./FormCheckout/FormCheckout";
import ModalAirProtect from "./ModalAirProtect/ModalAirProtect";
import './RoomDetails.scss'
export default function RoomDetail() {
  const dispatch = useDispatch();
  const { rateArray } = useSelector((state) => state.rate);
    const lengthRate = rateArray.length;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  const [lengthState, setLengthState] = useState(4);
  const { roomDetails } = useSelector((state) => state.room);
  
  const { id } = useParams();
  useEffect(() => {
    dispatch(getRoomDetails(id));
    dispatch(getRatesForRoom(id));
  }, [id]);
  const renderTools = () => {
    return (
      <div className="w-9/12  grid grid-cols-2">
        
        {roomDetails.wifi ? (
          <div className="col-span-1 my-2 flex items-center  ">
            <span style={{ position: "relative", top: "-1px" }}>
              <AiOutlineWifi className="text-lg text-red-400 mr-2" />
            </span>
            <span>Wifi</span>
          </div>
        ) : null}
        {roomDetails.elevator ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <MdOutlineElevator className="text-lg text-red-400 mr-2" />
            </span>
            <span>Thang m??y</span>
          </div>
        ) : null}
        {roomDetails.hotTub ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <GiBoilingBubbles className="text-lg text-red-400 mr-2" />
            </span>
            <span>T???m h??i</span>
          </div>
        ) : null}
        {roomDetails.pool ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <GiPoolDive className="text-lg text-red-400 mr-2" />
            </span>
            <span>B??? b??i</span>
          </div>
        ) : null}
        {roomDetails.indoorFireplace ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <MdOutlineFireplace className="text-lg text-red-400 mr-2" />
            </span>
            <span>L?? s?????i trong nh??</span>
          </div>
        ) : null}
        {roomDetails.dryer ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <GiWashingMachine className="text-lg text-red-400 mr-2" />
            </span>
            <span>M??y gi???t</span>
          </div>
        ) : null}
        {roomDetails.gym ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <GiGymBag className="text-lg text-red-400 mr-2" />
            </span>
            <span>Ph??ng gym</span>
          </div>
        ) : null}
        {roomDetails.kitchen ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <TbToolsKitchen className="text-lg text-red-400 mr-2" />
            </span>
            <span>B???p</span>
          </div>
        ) : null}
        {roomDetails.heating ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <GiHeatHaze className="text-lg text-red-400 mr-2" />
            </span>
            <span>N??ng l???nh</span>
          </div>
        ) : null}
        {roomDetails.cableTV ? (
          <div className="col-span-1 my-2 flex items-center">
            <span style={{ position: "relative", top: "-1px" }}>
              <AiOutlineFundProjectionScreen className="text-lg text-red-400 mr-2" />
            </span>
            <span>TV c??p</span>
          </div>
        ) : null}
      </div>
    );
  };


  const renderComments = () => {
    if (lengthRate > 4) {
      return rateArray.slice(0, lengthState).map((rate, index) => {
        return <Comment key={index} rate={rate} />;
      });
    } else {
      return rateArray.map((rate, index) => {
        return <Comment key={index} rate={rate} />;
      });
    }
  };

  return (
    <div className="grid xl:grid-cols-7 mt-28 grid-cols-12 roomDetails">
      <div className="xl:col-start-2 xl:col-span-5 col-start-1 col-span-12  flex flex-col">
        <div className="flex items-center mt-3 px-6 md:px-10 xl:px-0 order-2 sm:order-1" >
          <span>
            <SiGoogletranslate className="text-2xl text-blue-500" />
          </span>
          <span className="font-semibold text-2xl ml-3">
            {roomDetails.name}
          </span>
        </div>
        <div className="flex mt-2 order-3  sm:order-2 px-6 md:px-10  xl:px-0 flex-wrap">
          <div className="flex items-center" style={{minWidth:'106px'}}>
            <span className="relative " style={{ top: "-1px" }}>
              <AiFillStar
                className="inline-block text-base "
                style={{ color: "#ff385c" }}
              />
            </span>
            <span className="font-medium ml-1">
              {roomDetails.locationId?.valueate / 2} ?? {" "}
            </span>
            <span className="font-medium underline">
              {rateArray.length} ????nh gi??
            </span>
          </div>
          <div className="flex items-center ml-4 ">
            <span>
              <GiRank2 className="text-base " style={{ color: "#ff385c" }} />
            </span>
            <span className="font-light ml-1">Ch??? nh?? si??u c???p</span>
          </div>
          <div className="ml-4 flex-1 flex justify-between items-center flex-wrap">
            <p className="m-0 font-medium underline p-1" style={{minWidth:'210px'}}>
              {roomDetails.locationId?.name},{roomDetails.locationId?.province},
              {roomDetails.locationId?.country}
            </p>
            <div className="flex ">
              <a href="https://www.facebook.com/sharer/sharer.php?u=airbnb.com" target="_blank" className="mr-4 hoverDn text-black block p-1 hover:text-black rounded-md hover:bg-gray-200">
                <span className="" style={{ position: "relative", top: "-3px" }}>
                  <FiShare className="inline-block text-lg mr-1" />{" "}
                </span>
                <span className="underline font-medium">Chia s???</span>
              </a>
              <div className="hoverDn p-1 hover:bg-gray-200 rounded-md">
                <span style={{ position: "relative", top: "-2px" }}>
                  <AiOutlineHeart className="inline-block text-lg mr-1" />
                </span>
                <span className="underline font-medium">L??u</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid-cols-12 md:grid hidden px-10 xl:px-0  order-2 mt-6 ">
          <div className="col-span-6 ">
            <div>
              <img
                className="rounded-tl-2xl rounded-bl-2xl"
                style={{ height: "360px", width: "100%" }}
                src={
                  roomDetails.image ||
                  "https://chungcu365.com/uploads/1/duan/hzUQuuQzWd76fL0Dogto.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-span-6 pl-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0a/18/e9/62/nh-phong-khach-s-n.jpg"
                  style={{ height: "176px", width: "100%" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-tr-2xl"
                  src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                  style={{ height: "176px", width: "100%" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg"
                  style={{ height: "176px", width: "100%" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-br-2xl"
                  src="https://designs.vn/wp-content/images/15-04-2015/ph%C3%B2ng-ng%E1%BB%A7-kh%C3%A1ch-s%E1%BA%A1n-Suite%20(27).jpg"
                  style={{ height: "176px", width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden order-1" >
<Carousel autoplay >
<div>

    <div className="h-64" style={{backgroundImage:`url(${roomDetails.image||"https://chungcu365.com/uploads/1/duan/hzUQuuQzWd76fL0Dogto.jpg"})`,backgroundSize : '100% 100%',backgroundRepeat:'no-repeat'}}>
      
    </div>
</div>
    <div>
     <div className="h-64" style={{backgroundImage:`url("https://media-cdn.tripadvisor.com/media/photo-s/0a/18/e9/62/nh-phong-khach-s-n.jpg")`,backgroundSize : '100% 100%',backgroundRepeat:'no-repeat'}}>
      
    </div>
    </div>
    <div>
     <div className="h-64" style={{backgroundImage:`url("https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg")`,backgroundSize : '100% 100%',backgroundRepeat:'no-repeat'}}>
      
    </div>
    </div>
    <div>
     <div className="h-64" style={{backgroundImage:`url("https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg")`,backgroundSize : '100% 100%',backgroundRepeat:'no-repeat'}}>
      
    </div>
    </div>
    <div>
     <div className="h-64" style={{backgroundImage:`url("https://designs.vn/wp-content/images/15-04-2015/ph%C3%B2ng-ng%E1%BB%A7-kh%C3%A1ch-s%E1%BA%A1n-Suite%20(27).jpg")`,backgroundSize : '100% 100%',backgroundRepeat:'no-repeat'}}>
      
    </div>
    </div>
  </Carousel>
        </div>
      </div>
      <div className="xl:col-start-2 xl:col-span-5 col-start-1 px-10 xl:px-0 col-span-12 mt-12">
        <div className="grid grid-cols-12">
          <div className="md:col-span-7 col-span-12">
            <div className="flex justify-between  mb-6 flex-wrap">
              <div className="mism:w-10/12 w-full">
                <h1 className="text-2xl font-medium m-0 mb-1">
                  To??n b??? bi???t th??? . Ch??? nh?? Thien Duc
                </h1>
                <p className="m-0 text-base font-light">
                  {roomDetails.guests} kh??ch ?? {roomDetails.bedRoom} ph??ng ng??? ??{" "}
                  {roomDetails.bath} ph??ng t???m
                </p>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden mt-5 mism:mt-0">
                <img
                  className="w-full h-full"
                  src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                  alt=""
                />
              </div>
            </div>
            <div
              className="py-6 mb-6"
              style={{
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
              }}
            >
              <div className="flex   items-start">
                <span>
                  <BsHouseDoor className="text-xl text-primary" />
                </span>
                <div className="ml-2">
                  <h1 className="text-base font-medium">To??n b??? nh??</h1>
                  <p className="text-gray-400">
                    B???n s??? c?? chung c?? cao c???p cho ri??ng m??nh
                  </p>
                </div>
              </div>
              <div className="flex   items-start">
                <span>
                  <MdOutlineCleaningServices className="text-xl text-primary" />
                </span>
                <div className="ml-2">
                  <h1 className="text-base font-medium">V??? sinh t??ng c?????ng</h1>
                  <p className="text-gray-400">
                    <span>
                      Ch??? nh?? n??y ???? cam k???t th???c hi???n v??? sinh t??ng c?????ng 5 b?????c
                      c???a AirBnb
                    </span>
                    <span className="font-medium underline text-black">
                      T??m hi???u th??m
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex   items-start">
                <span>
                  <AiOutlineUser className="text-xl text-primary" />
                </span>
                <div className="ml-2">
                  <h1 className="text-base font-medium">
                    Thi???n l?? ch??? nh?? si??u c???p
                  </h1>
                  <p className="text-gray-400">
                    <span>
                      Ch??? nh?? si??u c???p l?? nh???ng ch??? nh?? c?? kinh nghi???m , ???????c
                      ????nh gi?? cao v?? l?? nh???ng ng?????i cam k???t mang l???i qu??ng th???i
                      gian tuy???t v???i cho kh??ch
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex   items-start">
                <span>
                  <AiOutlineCalendar className="text-xl text-primary" />
                </span>
                <div className="ml-2">
                  <h1 className="text-base font-medium">
                    Mi???n ph?? h???y trong 48 gi???
                  </h1>
                </div>
              </div>
            </div>
            <div
              style={{ paddingBottom: "10px", borderBottom: "1px solid #ccc " }}
            >
              <div>
                <img
                  style={{ width: "20%" }}
                  src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                  alt=""
                />
              </div>
              <p className="text-base font-light my-5">
                M???i ?????t ph??ng ?????u ???????c b???o v??? mi???n ph?? trong tr?????ng h???p Ch??? nh??
                h???y, th??ng tin nh??/ph??ng cho thu?? kh??ng ch??nh x??c v?? nh???ng v???n
                ????? kh??c nh?? s??? c??? trong qu?? tr??nh nh???n ph??ng.
              </p>
              <ModalAirProtect />
            </div>

            <div className="mt-7">
              <h1 className="text-lg">Ti???n nghi</h1>
              {renderTools()}
            </div>
          </div>
          <FormCheckout roomDetails={roomDetails} rateArray={rateArray} />
        </div>
      </div>
      <div
        className="xl:col-start-2 xl:col-span-5 col-start-1 col-span-12 mt-8 pt-8 px-10 xl:px-0"
        
      >
        <div className="flex items-center ">
          <span>
            <AiFillStar className="text-lg mr-1" style={{ color: "#ff385c" }} />
          </span>
          <span className="text-lg font-medium">
            {roomDetails.locationId?.valueate / 2 || ""}
          </span>
          <span className="text-lg font-light ml-2">{`(${rateArray.length} ????nh gi??) `}</span>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div className="xl:w-5/12 w-full flex ">
            <p className="w-6/12">M???c ????? s???ch s???</p>
            <Progress  strokeColor={"#ff385c"} percent={90} status="active" />
          </div>
          <div className="xl:w-5/12 w-full flex">
            <p className="w-6/12">????? ch??nh x??c</p>
            <Progress strokeColor={"#ff385c"} percent={85} status="active" />
          </div>
          <div className="xl:w-5/12 w-full flex">
            <p className="w-6/12">Li??n l???c</p>
            <Progress strokeColor={"#ff385c"} percent={95} status="active" />
          </div>
          <div className="xl:w-5/12 w-full flex">
            <p className="w-6/12">v??? tr??</p>
            <Progress strokeColor={"#ff385c"} percent={90} status="active" />
          </div>
          <div className="xl:w-5/12 w-full  flex">
            <p className="w-6/12">Nh???n ph??ng</p>
            <Progress strokeColor={"#ff385c"} percent={83} status="active" />
          </div>
          <div className="xl:w-5/12 w-full flex">
            <p className="w-6/12">Gi?? tr???</p>
            <Progress strokeColor={"#ff385c"} percent={92} status="active" />
          </div>
        </div>
      </div>
      <div className="xl:col-start-2 xl:col-span-5 col-start-1 col-span-12 my-8 px-10 xl:px-0">
        <div className="flex flex-wrap justify-between">{renderComments()}</div>
        <div className="text-center">
          {lengthRate > 4 && lengthRate > lengthState ? (
            <button
              onClick={() =>
                setLengthState((preState) => {
                  return preState + 4;
                })
              }
              className={cn(
                "py-3 px-5 rounded-md hvr-bob text-primary font-medium text-lg"
              )}
              style={{ border: "1px solid #ff385c" }}
            >
              Xem th??m...
            </button>
          ) : (
            ""
          )}
          {lengthState >= lengthRate && lengthRate !== 0 && lengthRate > 4 ? (
            <button
              style={{ border: "1px solid #ff385c" }}
              onClick={() => setLengthState(4)}
              className="py-3 px-5 rounded-md hvr-bob text-primary font-medium text-lg"
            >
              R??t g???n
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="xl:col-start-2 xl:col-span-5 col-start-1 col-span-12 px-10 xl:px-0 my-8  ">
        <h1 className="text-2xl font-medium mb-5 pt-10"  style={{borderTop:'1px solid #ccc'}}>Nh???ng ??i???u c???n bi???t</h1>
        <div className="flex justify-between flex-wrap">
          <div className="milg:w-1/5 w-full mt-5 milg:mt-0" >
            <h2 className="text-base mb-3 ">N???i quy nh??</h2>
            <div className="flex items-center my-2 text-base">
              <span>
                <AiFillClockCircle className="mr-2" />
              </span>
              <span>Nh???n ph??ng: 15:00 - 22:00</span>
            </div>
            <div className="flex items-center my-2 text-base">
              <span>
                <AiFillClockCircle className="mr-2" />
              </span>
              <span>Tr??? ph??ng: 11:00</span>
            </div>
            <div className="flex items-center my-2 text-base">
              <span>
                <IoLogoNoSmoking className="mr-2" />
              </span>
              <span>Kh??ng h??t thu???c</span>
            </div>
            <div className="flex items-center my-2 text-base">
              <span>
                <MdPets className="mr-2" />
              </span>
              <span>Kh??ng th?? c??ng</span>
            </div>
          </div>
          <div className="milg:w-4/12 w-full mt-5 milg:mt-0">
            <h2 className="text-base mb-3">Y t??? v?? an to??n</h2>

            <div className="flex  my-2 text-base">
              <span>
                <MdLocalHospital className="mr-2" />
              </span>
              <span>
                C??c bi???n ph??p an to??n trong ?????i d???ch COVID-19 c???a Airbnb ???????c ??p
                d???ng
              </span>
            </div>
            <div className="flex  my-2 text-base">
              <span>
                <AiFillQuestionCircle className="mr-2" />
              </span>
              <span>
               Ch??a c?? th??ng tin v??? vi???c c?? m??y ph??t hi???n kh?? CO <span className="underline text-gray-500">Hi???n th??? th??m</span>
              </span>
            </div>
             <div className="flex  my-2 text-base">
              <span>
                <GiSmokeBomb className="mr-2" />
              </span>
              <span>
                M??y b??o kh??i
              </span>
            </div>
            <p className="text-base font-medium underline mt-4">T??m hi???u th??m</p>
          </div>
          <div className="milg:w-4/12 w-full mt-5 milg:mt-0">
            <h2 className="text-base mb-3">Ch??nh s??ch h???y</h2>
            <p className="text-base">Th??m ng??y cho chuy???n ??i c???a b???n ????? nh???n th??ng tin v??? ch??nh s??ch h???y cho ?????t ph??ng n??y.</p>
            <p className="text-base font-medium underline">Th??m ng??y</p>
          </div>
        </div>
      </div>
    </div>
  );
}
