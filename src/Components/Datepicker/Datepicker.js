import React, { useState } from 'react'
import { DatePicker, Space } from 'antd';
import './Datepicker.scss'
import dayjs from 'dayjs'
import moment from 'moment'
export default function Datepicker(props) {
    const {handleChangeDay} = props
    const handleChange = (date,dateString)=>{
        
        const a = moment(dateString[0],'DD/MM/YYYY')
        const b = moment(dateString[1],'DD/MM/YYYY')
        const c =b.diff(a, 'days')
        
        handleChangeDay(c,{
          checkIn : dayjs(a._i).format('YYYY-DD-MMTHH:mm:ss.SSSZ'),
          checkOut : dayjs(b._i).format('YYYY-DD-MMTHH:mm:ss.SSSZ')
        })
        
        

    }
  return (
     <Space
    direction="vertical"
    
    style={{
      width: '100%',
    }}
    
    
  >
    <DatePicker.RangePicker
    onChange={handleChange}
    
    format={'DD/MM/YYYY'}
      status=""
      style={{
        width: '100%',
        border: "2px solid #ff385c",
        borderTopLeftRadius :'8px',
        borderTopRightRadius :'8px',
        
      }}
      placeholder={['Nhận phòng', 'Trả phòng']}
     separator={<div  style={{width:'1px',backgroundColor:'#ff385c',height:'50px'}}>
        
     </div>}
     suffixIcon={''}
    />
  </Space>
  )
}
