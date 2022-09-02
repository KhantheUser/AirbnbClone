import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUserList } from '../Slices/userManage'

export default function useCheckEmailExit() {
    const dispatch = useDispatch()
  const timeRef = useRef()
    const {userList} = useSelector((state)=>state.userManage)
    const [isExitEmail,setIsValid] = useState(true)

    useEffect(()=>{
        dispatch(getUserList())

    })
  const handleCheckEmail = (e)=>{
     clearTimeout(timeRef.current)
     timeRef.current = setTimeout(()=>{
       const result =  userList.find((item)=>{
         return e.target.value === item.email 
        })
        if(result){
             setIsValid(false) 
        }else {
            setIsValid(true)
        }
    },300)
   
  }
  return {
    isExitEmail,
    handleCheckEmail
  }
}
