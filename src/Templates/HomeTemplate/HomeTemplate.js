import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Header from './Layout/Header/Header'
import { getPositionList } from '../../Slices/positionSlice'
import Footer from './Layout/Footer/Footer'
export default function HomeTemplate() {
  

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPositionList())
  },[])
  return (
    <div className="">
        <Header/>
        

        <Outlet/>
       
        <Footer />
    </div>
  )
}
