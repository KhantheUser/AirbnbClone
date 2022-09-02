import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import './Header.scss'
import { FaSearch , FaFacebookF} from "react-icons/fa"
import {  AiOutlineCopyright, AiOutlineGlobal, AiOutlineTwitter } from "react-icons/ai"
import {useNavigate} from 'react-router-dom'

import HeaderSearch from "./HeaderSearch/HeaderSearch";
import DropDown from "../../../../Components/DropDown/DropDown";
import { BsCurrencyDollar, BsInstagram } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Dropdown, Menu ,Select} from "antd";


import cn from 'classnames'

const { Option } = Select;
export default function Header() {
  const navigate = useNavigate()
  const [showLanguages,setShowLanguages] = useState(false)
  const [searchVisible,setSearchVisible] = useState(false)
   const {t,i18n} = useTranslation();
  
  
  
const handleChange = (value)=>{
  i18n.changeLanguage(value)
}
  const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a href="https://www.facebook.com/airbnb" target="_blank" className="block mx-1 text-black text-lg">
                    <FaFacebookF/>
                  </a>
        ),
      },
      {
        key: '2',
        label: (
           <a href="https://twitter.com/airbnb" target="_blank" className="block mx-1 text-black text-lg">
                    <AiOutlineTwitter/>
                  </a>
        ),
      },
      {
        key: '3',
        label: (
           <a href="https://www.instagram.com/airbnb/" target="_blank" className="block mx-1 text-black text-lg">
                    <BsInstagram/> 
                  </a>
        ),
      },
       
    ]}
  />
);
  return (
    <>
    <div className="fixed top-0 right-0 left-0 z-10 bg-white">
    <div className="header py-4">
      <div className="container-dn">
        <div className="flex items-center justify-between ">
          <div className="w-2/12 cursor-pointer hidden md:block" onClick={()=>navigate("/")}>
            <img className="w-3/5 h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt=""
            />
          </div>
          <div className="  flex justify-between items-center  " >
                <div className="rounded-full searchBox hidden sm:block">
                    <button onClick={()=>setSearchVisible(!searchVisible)} className="py-3 px-4 font-medium">
                    {t('Nơi ở')}
                    </button>
                    <span style={{width:'1px',height:'24px',backgroundColor:'#ccc',display:'inline-block',transform:"translateY(20%)"}}></span>
                    <button className="py-3 px-4 font-medium">
                    {t('Trải nhiệm')}
                    </button>
                                        <span style={{width:'1px',height:'24px',backgroundColor:'#ccc',display:'inline-block',transform:"translateY(20%)"}}></span>
                     <button className="py-3 px-4 font-mono text-gray-400 inline-flex items-center"> 
                        {t('Trải nhiệm trực tuyến')}
                        <div className="inline-flex  p-2 ml-8  items-center " style={{width:'30px',height:'30px',borderRadius:'99999px',background:'#ff385c'}} >
                            <FaSearch className="text-white inline-block text-sm  "  />
                        </div>
                     </button>
                   
                </div>
                
                  <div onClick={()=>setSearchVisible(!searchVisible)} className="inline-flex sm:hidden cursor-pointer  p-2   items-center " style={{width:'30px',height:'30px',borderRadius:'99999px',background:'#ff385c'}} >
                            <FaSearch className="text-white inline-block text-sm  "  />
                        </div>

                
          </div>
          <div className=" flex justify-end items-center host relative">
            
                <a href="https://www.airbnb.com.vn/host/homes" target="_blank" className="m-0 text-black hover:text-black hidden lg:block">{t('Đón tiếp khách')}</a>

                <span onClick={()=>setShowLanguages(!showLanguages)}  className="hidden sm:block"><AiOutlineGlobal className="text-lg"/></span>
                
    <div style={{boxShadow :'0 0 2px 2px rgba(0,0,0,0.3)'}} className={cn("w-32 absolute top-14 right-10 bg-white animate__animated animate__fadeInDown rounded-md ",{
      hidden : !showLanguages
    })} >
     <p className="m-0 p-2 hoverDn hover:bg-gray-100" onClick={()=>{handleChange('vn')}}>Vietnamese</p>
     <p className="m-0 p-2 hoverDn hover:bg-gray-100" onClick={()=>{handleChange('en')}}>English</p>
     <p className="m-0 p-2 hoverDn hover:bg-gray-100" onClick={()=>{handleChange('cn')}}>Chinese</p>
    </div>

                
                 <DropDown />
                
               
          </div>
        </div>
      </div>
      
    </div>
    <HeaderSearch setSearchVisible={()=>setSearchVisible(false)} searchVisible={searchVisible}/>
    </div>
     <div className="fixed bottom-0 right-0 left-0 bg-white  " style={{height:'50px',borderTop:'1px solid #ccc',zIndex:'2'}}>
        <div className="container-dn h-full 0 flex items-center justify-between">
            <div className='flex '>
                <div className="flex items-center">
                    <span><AiOutlineCopyright/></span>
                    <span>2022 Airbnb, Inc.</span>
                </div>
                <a target="_blank" className="block mx-3 text-black hover:text-black hover:underline" href="https://www.airbnb.com.vn/help/article/2855/quy%E1%BB%81n-ri%C3%AAng-t%C6%B0-tr%C3%AAn-airbnb">
                    Quyền riêng tư
                </a>
                <a target="_blank" className="hidden md:block mx-3 text-black hover:text-black hover:underline" href="https://www.airbnb.com.vn/help/article/2908/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-d%E1%BB%8Bch-v%E1%BB%A5">
                    Điều khoản 
                </a>
                <a target="_blank" className=" mx-3 hidden lg:block text-black hover:text-black hover:underline" href="https://www.airbnb.com.vn/sitemaps/v2">
                    Sơ đồ trang web
                </a>
            </div>
            <div className='flex'>
                <div className="sm:flex items-center mx-2 hover:underline cursor-pointer font-medium hidden">
                    <span><AiOutlineGlobal/></span>
                    <span>Tiếng Việt (VN)</span>
                </div>
                <div className="sm:flex hidden items-center mx-2 hover:underline cursor-pointer font-medium">
                    <span><BsCurrencyDollar/></span>
                    <span>USD</span>
                </div>
                <div className="hidden lg:flex items-center mx-2 hover:underline cursor-pointer font-medium">
                    <span >Hỗ trợ tài nguyên</span>
                    <span><MdOutlineKeyboardArrowUp/></span>
                </div>
               <Dropdown className="sm:hidden" overlay={menu} placement="top" arrow>
      <div className="font-medium hover:underline">Liên hệ</div>
    </Dropdown>
                 <div className="sm:flex hidden items-center mx-2 hover:underline cursor-pointer  ">
                  <a href="https://www.facebook.com/airbnb" target="_blank" className="block mx-1 text-black text-lg">
                    <FaFacebookF/>
                  </a>
                  <a href="https://twitter.com/airbnb" target="_blank" className="block mx-1 text-black text-lg">
                    <AiOutlineTwitter/>
                  </a>
                  <a href="https://www.instagram.com/airbnb/" target="_blank" className="block mx-1 text-black text-lg">
                    <BsInstagram/>
                  </a>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
