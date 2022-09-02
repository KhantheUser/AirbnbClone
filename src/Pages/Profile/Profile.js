import React, { useEffect, useRef, useState } from 'react'
import { USER_LOGIN } from '../../Util/config'
import { useDispatch,useSelector } from 'react-redux'
import { getUserInfo, postChangeAvatar } from '../../Slices/userManage'
import dayjs from 'dayjs'
export default function Profile() {
    const fileRef = useRef()
    const [avatar,setAvatar] = useState(localStorage.getItem('avatar'))
    const userId = JSON.parse(localStorage.getItem(USER_LOGIN)).user._id
    const dispatch = useDispatch()
    
    const {user} = JSON.parse(localStorage.getItem(USER_LOGIN))

    
   
    const handleChangeAvatar = (e)=>{
        const file = e.target.files[0]
        const fileReader = new FileReader()
       
        fileReader.readAsDataURL(file)
        fileReader.onload = (e)=>{
            const url = e.target.result
           
            setAvatar(url)
            const formData = new FormData()
            formData.append('avatar',file)
            dispatch(postChangeAvatar(formData))
        }
    }
  return (
    <div className='mt-20 pt-2'>
        <div className="grid grid-cols-11 ">
            <div className="col-span-2   " style={{background:'rgba(0,0,0,0.7)'}}>
            <div className='flex flex-col justify-center'>
<div className=" mt-10   mx-auto">
                    <img className="h-36 w-36 rounded-full" src={avatar || user?.avatar  } alt="" />
                </div>
                <input accept='image/png,image/jpeg,image/gif' ref={fileRef} type="file" name="" onChange={handleChangeAvatar} className="hidden" id="" />
                <p onClick={()=>fileRef.current.click()} className="text-white rounded-md text-center mt-3 hover:bg-red-400 transition-all duration-300 cursor-pointer  p-3 inline-block mx-auto" style={{border:'1px solid #ff385c'}}>Đổi ảnh đại diện</p>
            </div>
            <div className='mt-4'>
                <a href="#home" className="block text-center text-primary text-lg my-4">Home</a>
                <a href="#information" className="block text-center text-primary text-lg my-4">Information</a>
                <a href="#about" className="block text-center text-primary text-lg my-4">About</a>
                <a href="#skills" className="block text-center text-primary text-lg my-4">Skills</a>
            </div>
            </div>
            <div className="col-span-9  ">
                <div id='home' style={{height:'500px',backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,1),transparent),url("https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/146897238_842172166340978_5531897010868413450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xlKR94_kPY8AX9p--ST&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-uuft-a9hWXq4aEnEUMEN5Izvl4ZVG61NyH2ty6hzFTg&oe=63287343")',backgroundSize:'100% 100%'}} className=" bg-green-200">
                <div className='p-20'>

             
                        <h1 className="text-white text-5xl">Hello, I am
                        <p className="text-7xl mt-4 font-mono">Thien Duc</p>
                        </h1>
                        <div className="text-white mt-5 text-5xl ">
                            Frontend Developer 
                        </div>
                           </div>
                </div>
                <div className="py-8 px-36">
                <div id='information'>

                
               <h1 className="text-primary font-meidum text-2xl mb-5">Information</h1>
 <div className=' flex h-80 justify-between'>
                
                    <div className='w-5/12 p-6 rounded-2xl' style={{border:'1px solid #ff385c'}}>
                        <div>
                        
                            <p className="text-base">
                                <span className=" font-medium inline-block" style={{width:'100px'}}>Họ và tên :</span>
                                <span>{user?.name}</span>
                            </p>
                            <p className="text-base">
                             <span className=" font-medium inline-block" style={{width:'100px'}}>Giới tính : </span>
                                <span>{user?.gender ? 'Nam' : 'Nữ'}</span>
                            </p>
                             <p className="text-base">
                             <span className=" font-medium inline-block" style={{width:'100px'}}>Ngày sinh :</span>
                                <span>{dayjs(user?.birthday).format('DD/MM/YYYY')}</span>
                            </p>
                             <p className="text-base">
                             <span className=" font-medium inline-block" style={{width:'100px'}}>Email :</span>
                                <span>{user?.email}</span>
                            </p>
                             <p className="text-base">
                             <span className=" font-medium inline-block" style={{width:'100px'}}>Điện thoại :</span>
                                <span>{user?.phone}</span>
                            </p>
                             <p className="text-base">
                             <span className=" font-medium inline-block" style={{width:'100px'}}>Địa chỉ :</span>
                                <span>{user?.address}</span>
                            </p>
                        </div>
                    </div>
                    <div className='w-6/12   rounded-2xl '>
                        <img className="w-full h-full rounded-2xl " src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/81612511_582279418996922_6533374512598089728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=NpZ-HrQUHKkAX8ocPpt&tn=AjWoKcDLexJxXlde&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8tDTPlK0yvVmRNM88je1t7seGzLzsMGsEgTLMmi41STw&oe=63291FBB" alt="" />
                    </div>
                </div>
                </div>
                <div id='about'>

                
                <h1 className='text-primary font-meidum text-2xl mt-10'>About</h1>
                <div>
                    <p className="font-mono text-xl">WHO AM I?</p>
                    <p className="text-base leading-7">Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                    <p className="text-base leading-7"><span className="font-medium">Hi I'm Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                    <p className="text-base leading-7">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </div>
                
                </div>
                <div id="skills">
                    <h1 className='text-primary font-meidum text-2xl mt-10'>Skills</h1>
                    <div className="flex justify-between mt-5">
                        <div className='h-10 flex items-center rounded-md ' style={{width:'23%',border:'1px solid #ff385c',borderLeft:'none'}}>
                            <img width={50} height={50} src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="" />
                            <span className="text-primary inline-block ml-2 font-medium text-base">Javascript</span>
                        </div>
                        <div className='h-10 flex items-center rounded-md ' style={{width:'23%',border:'1px solid #ff385c',borderLeft:'none'}}>
                            <img width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png" alt="" />
                            <span className="text-primary inline-block ml-2 font-medium text-base">Photoshop</span>
                        </div>
                         <div className='h-10 flex items-center rounded-md ' style={{width:'23%',border:'1px solid #ff385c',borderLeft:'none'}}>
                            <img width={50} height={50} src="https://seeklogo.com/images/A/adobe-premiere-logo-0B31ECF881-seeklogo.com.png" alt="" />
                            <span className="text-primary inline-block ml-2 font-medium text-base">Premeier Pro</span>
                        </div>
                         <div className='h-10 flex items-center rounded-md ' style={{width:'23%',border:'1px solid #ff385c',borderLeft:'none'}}>
                            <img className="rounded-md" width={50} height={50} src="https://cdn.auth0.com/blog/optimizing-react/logo.png" alt="" />
                            <span className="text-primary inline-block ml-2 font-medium text-base">Reactjs</span>
                        </div>
                    </div>
                </div>


                </div>
                
               
            </div>
        </div>
    </div>
  )
}
