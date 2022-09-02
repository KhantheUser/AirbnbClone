import { Input, Modal, Table } from 'antd';


import React, { useEffect, useRef, useState } from 'react'
import { BsFillDoorOpenFill, BsSearch } from 'react-icons/bs';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams,useNavigate,useSearchParams } from 'react-router-dom'
import { deletePhong, getRoomList, postAnhPhong } from '../../../Slices/roomSlice';
import cn from 'classnames'
export default function QuanLiPhong() {
  
   const [searchParams,setSearchParams] = useSearchParams()
  const id = searchParams.get('locationId')
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [roomId,setRoomId] = useState('')

  const navigate = useNavigate()
    const fileRef = useRef()
    const [img,setImg] = useState('')

const showModal = () => {
    setIsModalVisible(true);
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const dispatch = useDispatch()
  const {roomArray} = useSelector((state)=>state.room)
  const columns = [
  {
    title: 'Tên khách sạn',
    dataIndex: 'name',
   
    key :'name',
    width: '20%',
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'image',
    key :'image',

    render : (text,name)=>{
      return (
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-md' src={name.image}  alt="" />
                <span onClick={()=>{
                  setRoomId(name._id)
              showModal()
            }} className="block p-1 bg-green-500 cursor-pointer hover:bg-green-600 transition-all duration-300 text-white ml-2 rounded-md" style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}}>Chỉnh sửa</span>
            </div>
        )
    }
  },
  {
    title: 'Mô tả',
    key :'description',

    dataIndex: 'description',
    render : (text,name)=>{
      return (
         <span title={text}>{text?.length >40 ? text.slice(0,40)+'...':text}</span>
      )
    },
   width:'30%'
  },
   {
    title: 'Giá tiền',
    dataIndex: 'price',
    key :'price',
   
  },
  {
    title: '',
    key :'',

    dataIndex: 'action',
     render : (text,name)=>{
       return (
        <div className="flex justify-center text-white">
            <span onClick={()=>{
              navigate(`/admin/room-manage/edit-room/${name._id}?locationId=${id}`)
            }}  style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}} className={cn('inline-block py-1 px-2 bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 mx-2 ',{
              hidden : !id
            })}>Xem & Sửa</span>
            <span onClick={()=>{
              dispatch(deletePhong({
                roomId : name._id,
                locationId : id
              }))
            }}   style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}} className="inline-block py-1 px-2 bg-red-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600">Xóa</span>
       </div>
       )
    },
    
  },
];
const { Search } = Input;
const handleChangeImage = (e)=>{
        let file = e.target.files[0]
 
        
        const readFile = new FileReader()
        readFile.readAsDataURL(file)
        
        readFile.onload = (e)=>{
            
            setImg(e.target.result)
           
        }
}
const suffix = (
  <BsSearch
    style={{
    
      fontSize: 16,
      color: '#ff385c',
    }}
  />
);
const onSearch = (value) => console.log(value);

 const timeSearchRef = useRef()
    const [searchValue ,setSearchValue] = useState('')
 const handleSearchValue = (e)=>{

    clearTimeout(timeSearchRef.current)
     timeSearchRef.current = setTimeout(()=>{
        setSearchValue(e.target.value)
        
        
     },300)
     
     
    }
const data =roomArray.map((item,index)=>{
 return {
  ...item,
  key : index
 }
})
useEffect(()=>{
  dispatch(getRoomList(id))
},[])
const onChange = (pagination, filters, sorter, extra) => {

};
  return (
    <>
      <div className="flex items-center justify-between">
         <Search
      placeholder="Tìm gmail hoặc số điện thoại"
      enterButton="Search"
      autoFocus={true}
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      onChange={handleSearchValue}
      style={{
        width: '40%',
        margin :' 20px 0',
      
        
      }}
    />
    <h1
     onClick={()=>navigate(`/admin/room-manage/add-room/${id}`)} 
     className={cn("flex items-center underline cursor-pointer hover:scale-110 transition-all duration-300 text-primary text-lg",{
      hidden : !id
     })}>
      <span >Tạo khách sạn phòng trọ</span>
      <span><BsFillDoorOpenFill/></span>
    </h1>
      </div>
      <Table columns={columns} dataSource={data.filter((item)=>{
        return item.name?.toLowerCase().includes(searchValue.toLowerCase().trim())
      })} onChange={onChange} />

      <Modal footer={<>
            <span onClick={()=>{
                const formData =new FormData()
                formData.append('room',document.getElementById('fileImageRoom').files[0])

dispatch(postAnhPhong({
  file : formData,
  roomId : roomId,
  locationId : id
}))
                
            }} className="inline-block py-1 px-2 text-white bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 ">Cập nhập</span>
            <span onClick={handleCancel} className="inline-block py-1 px-2 bg-red-500 rounded-md text-white cursor-pointer transition-all duration-300 hover:bg-red-600 mx-2" >Cancel</span>
         </>}  title={<div className="text-center text-2xl  text-green-500" style={{ fontFamily: "'Edu TAS Beginner', cursive" }}>Thêm ảnh du lịch!!!</div>} visible={isModalVisible}  onCancel={handleCancel}>
                <div className="">
                <button onClick={()=>fileRef.current.click()} className="inline-block py-1 text-white px-2 bg-primary rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600 ">Chọn ảnh</button>
                    <input ref={fileRef} id="fileImageRoom" className='hidden' onChange={handleChangeImage} type="file" name=""  />
                    <br />
                <img src={img || 'https://1.bp.blogspot.com/-RoOiYu8pweY/YGLZiX0bQ_I/AAAAAAAArE4/4AUbslYlESME_-arrxmvha763Te_jh1kwCNcBGAsYHQ/s0/ff99e81f59e3a9c02ff4f799f35cfc90.jpeg'} className='w-80 h-72 rounded-md mt-3 block' alt="" />
                </div>
            </Modal>
    </>
  )
}
