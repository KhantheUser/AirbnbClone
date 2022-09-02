import React, { useState } from 'react'
import dayjs from 'dayjs'
import cn from 'classnames'
import hover from 'hover.css'

export default function Comment(props) {
    
    const {rate} = props
    const user = rate.userId
    const [fullRef,setFullRef]= useState(true)
  return (
    <div className='animate__animated animate__backInUp sm:w-5/12 w-full mb-6 p-3 rounded-md overflow-hidden hvr-grow cursor-pointer' style={{border:'1px solid #ff385c',minHeight:'150px'}}>
                            <div className='flex items-center'>
                                <img style={{height:'50px', width:'50px'}} className="rounded-full" src={user?.avatar || "https://i.pinimg.com/originals/63/eb/c0/63ebc09daae37481cbdc0aa734202609.gif"} alt="" />
                                <div className="ml-2">
                                    <p className='m-0 font-medium'>{user?.name}</p>
                                    <span className='text-gray-500'>{dayjs(rate.created_at).format('DD/MM/YYYY')}</span>
                                </div>
                            </div>
                            <p className={cn("mt-4 font-mono",{
                                'hidden': !fullRef
                            })}>{rate.content?.length>150?<span className='font-mono'>{rate.content.slice(0,116)}...<span className='cursor-pointer' onClick={()=>setFullRef(!fullRef)} style={{color:'#ff385c'}}>Xem thêm</span></span>:<span className='font-mono'>{rate.content}</span>}</p>
                            <p className={cn("mt-4 font-mono",{
                                'hidden': fullRef
                            })}>{rate.content}</p>
                        </div>
  )
}
