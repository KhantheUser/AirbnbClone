import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackToHome() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/")} style={{position:'absolute',top:'20px',left: '2%',padding:'9px 12px'}} className="text-lg cursor-pointer transition-all hover:-translate-y-2 text-white font-medium rounded-full bg-primary">
            Back to Home
    </div>
  )
}
