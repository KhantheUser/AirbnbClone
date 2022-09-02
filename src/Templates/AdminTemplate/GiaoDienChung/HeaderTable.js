import React from 'react'

export default function HeaderTable(props) {
    const {data} = props
  return (
    <div className="header_table flex font-semibold h-12 text-base  rounded-tr-xl rounded-tl-xl " style={{ border: '2px solid #ff385c' }}>
                
                {data.map((item,index)=>{
                    return (
                         <div key={index} className={` w-${item.length}/12 justify-center  flex items-center`} style={{ borderRight: '2px solid #ff385c' }}>
                    {item.content}
                    </div>
                    )
                })}
            </div>
  )
}
