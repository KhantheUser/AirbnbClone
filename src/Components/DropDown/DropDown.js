import React, { useState } from 'react'
import { Dropdown, Menu, Space } from 'antd';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import {Navigate, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from '../../Util/config';
import cn from 'classnames'
import './DropDown.scss'
import { BsDoorOpenFill, BsFillHouseFill } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { MdOutlineFlightTakeoff } from 'react-icons/md';
import { AiOutlineClose, AiOutlineHistory, AiOutlineUser } from 'react-icons/ai';
export default function DropDown() {
  const {userLogin} = useSelector((state)=>state.user)
const userRole = JSON.parse(localStorage.getItem(USER_LOGIN))?.user.type
  
    const navigate = useNavigate()
    const [isHidden,setIsHidden] = useState(true) 
    const menu = (
  <Menu
  className=''
  style={{width:'240px',borderRadius:'10px',boxShadow:'0 0 3px 3px rgba(0,0,0,0.1)',marginTop:'10px',padding:'10px 0'}}
    items={[
      {
        key: '1',
        label: (
          <>
            {Object.keys(userLogin).length !==0 ? <>
              <p onClick={()=>navigate('/profile')} className="text-base font-medium m-0">{`Hello ${userLogin?.user?.name}`}</p>
              <p onClick={()=>navigate('/history')} className="text-base  mt-3">Lịch sử đặt vé</p>
            </>:<p onClick={()=>navigate('/register')} className="text-base font-medium m-0">Đăng ký</p> }
          </>
            // 
        )
      },
      {
        key: '2',
       label: (
            <>
              {Object.keys(userLogin).length !==0 ? <p onClick={()=>{
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN)
            navigate('/')
            window.location.reload()
           }} style={{borderBottom:'1px solid #ccc'}} className="text-base   m-0 pb-2 pt-2">Đăng xuất</p>:<p onClick={()=>navigate('/login')}  className="text-base   m-0 pb-4 pt-3" style={{borderBottom:'1px solid #ccc'}}>
                Đăng nhập
            </p> }
            </>
        )
        
      },
      {
        key :'3',
        label : (
          <p onClick={()=>{
            if(userRole === 'ADMIN'){
              navigate('/admin');
            }else{
              navigate('/')
              alert('Bạn không có quyền truy cập')
            }
          }} className="text-base   m-0 py-1" >
                Đi đến trang quản trị
            </p>
        )
      },
      {
        key :'4',
        label : (
          <p  className="text-base   m-0 py-1" >
                Cho thuê nhà
            </p>
        )
      },
      
      {
        key: '5',
        
       label: (
             <p  className="text-base   m-0 py-1" >
               Tổ chức trải nhiệm
            </p>
        )
      },
      {
        key: '6',
        
       label: (
             <p  className="text-base   m-0 py-1" >
                Trợ giúp
            </p>
        )
      },
      
    ]}
  />
);
  return (
   <>
     <div className="userDropDown hidden sm:block">

    
     <Dropdown overlay={menu} trigger={['click']}  >
    <div className="flex text-gray-500 items-center  " style={{padding:'5px 12px'}}>
                    <FaBars className="text-lg mr-3"/>
                    {userLogin?.user?.avatar ?<div > <img className='rounded-full' style={{height:'30px',width:'30px'}} src={userLogin.user.avatar} alt="" /></div>:<FaUserCircle style={{width:'30px',height:'30px'}}/>}
                    <div className="absolute " style={{top:'113%',zIndex:'2'}}>

                    
                    </div>
                </div>
  </Dropdown>
  
                  {/* <div>
                    <FaBars className="text-primary"/>
                  </div> */}
  </div>
  <div onClick={()=>setIsHidden(!isHidden)}  className={cn('sm:hidden cursor-pointer',{
    'hidden' : !isHidden
  })}>
                            <FaBars className="text-primary inline-block text-xl "  />
                        </div>
                        <div onClick={()=>setIsHidden(!isHidden)}  className={cn('sm:hidden cursor-pointer',{
    'hidden' : isHidden
  })}>
                          <AiOutlineClose className="text-primary inline-block text-xl "/>
                        </div>
                        <div style={{backgroundColor:'rgba(0,0,0,0.82)'}} className={cn(' fixed top-16 right-0 left-0 h-full animate__animated animate__backInRight barMobile',{
                          'hidden' : isHidden
                        })}>
                              <p onClick={()=>navigate('/profile')} className={cn('flex',{
                                'hidden' : Object.keys(userLogin).length === 0
                              })}>Hello {userLogin.user?.name}
                              <span>
                                <BsDoorOpenFill/>
                              </span>
                              </p>
                             
                              <p  onClick={()=>navigate('/login')} className={cn('flex',{
                                'hidden' : Object.keys(userLogin).length !== 0
                              })}>Đăng nhập
                                <span>
                                  <AiOutlineUser/>
                                </span>
                              </p>
                               <p onClick={()=>navigate('/register')} className={cn('flex',{
                                'hidden' : Object.keys(userLogin).length !== 0
                              })}>Đăng ký
                                <span>
                                  <AiOutlineUser/>
                                </span>
                              </p>
                              <p onClick={()=>navigate('/history')} className={cn('flex',{
                                'hidden' : Object.keys(userLogin).length === 0
                              })}>Lịch sử đặt vé
                                <span>
                                  <AiOutlineHistory/>
                                </span>
                              </p>
                              
                              <p className="flex">Cho thuê nhà
                                <span>
                                  <BsFillHouseFill/>
                                </span>
                              </p>
                              <p className="flex">Tổ chức trải nhiệm
                              <span>
                               <MdOutlineFlightTakeoff/>
                              </span>
                              </p>
                              <p className="flex">Trợ giúp
                              <span>
                                <FiHelpCircle/>
                              </span>
                              </p>
                               <p onClick={()=>{
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN)
            navigate('/')
            window.location.reload()
           }} className={cn('flex',{
                                'hidden' : Object.keys(userLogin).length === 0
                              })}>Đăng xuất
                                <span>
                                  <AiOutlineUser/>
                                </span>
                              </p>
                        </div>
   </>
  )
}
