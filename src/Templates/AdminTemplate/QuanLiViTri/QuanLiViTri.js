import React, { useEffect, useRef, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { deletePosition, getPositionList, postAnhViTri } from '../../../Slices/positionSlice'
import { BsSearch } from 'react-icons/bs';

import { useNavigate ,useSearchParams} from 'react-router-dom';



export default function QuanLiViTri() {
    const [img,setImg] = useState('')
    const [params,setParams] = useSearchParams('')
   
    
    const [locationId,setLocationId] = useState('')
    console.log(locationId);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {positionArray} = useSelector((state)=>state.position)
   
    const fileRef = useRef()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
  {
    title: 'Tên địa danh',
    dataIndex: 'name',
      width: '20%',
  },
    
  {
    title: 'Hình ảnh',
    dataIndex: 'image',
    render : (text,location)=>{
        return (
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-md' src={location.image} alt="" />
                <span onClick={()=>{
                  
                    setLocationId(location._id)
            showModal()
        }} className="block p-1 bg-green-500 cursor-pointer hover:bg-green-600 transition-all duration-300 text-white ml-2 rounded-md" style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}}>Chỉnh sửa</span>
            </div>
        )
    },
    width:'20%'
  },
  {
    title: 'Tỉnh/Thành phố',
    dataIndex: 'province',
    
    width: '15%',
  },
   {
    title: 'Quốc gia',
    dataIndex: 'country',
    
    width: '10%',
  },
  {
    title: 'Đánh giá',
    dataIndex: 'valueate',
    
    width: '10%',
  },
   {
    title: '',
    dataIndex: 'action',
     render : (text,name)=>{
       return (
        <div className="flex justify-center text-white">
        <span onClick={()=>{
            navigate(`/admin/room-manage?locationId=${name._id}`)
        }} style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}} className="inline-block py-1 px-2 bg-blue-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-blue  ">Xem phòng</span>
            <span style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}} onClick={()=>{
                navigate(`edit-location/${name?._id}`)
            }} className="inline-block py-1 px-2 bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 mx-2 ">Xem & Sửa</span>
            <span  onClick={()=>{
                dispatch(deletePosition(name._id))
            }} style={{boxShadow:'0 2px 2px 2px rgba(0,0,0,0.3)'}} className="inline-block py-1 px-2 bg-red-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600">Xóa</span>
       </div>
       )
    },
    
  },

  
];

const handleChangeImage = (e)=>{
        let file = e.target.files[0]
   
        
        const readFile = new FileReader()
        readFile.readAsDataURL(file)
        
        readFile.onload = (e)=>{
           
            setImg(e.target.result)
            
        }
}
const data = positionArray
const { Search } = Input;
const suffix = (
  <BsSearch
    style={{
    
      fontSize: 16,
      color: '#ff385c',
    }}
  />
);
const onChange = (pagination) => {
    // navigate('?page='+pagination.current)
//   setPage(pagination.current)
setParams({
    'page' : pagination.current
})

};
const onSearch = (value) => console.log(value);
  const timeSearchRef = useRef()
    const [searchValue ,setSearchValue] = useState('')

 const handleSearchValue = (e)=>{

    clearTimeout(timeSearchRef.current)
     timeSearchRef.current = setTimeout(()=>{
        setSearchValue(e.target.value)
        
        
     },300)
     
     
    }
useEffect(()=>{
    dispatch(getPositionList())
},[])
  return (
    <>
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
        <Table pagination={{
            // defaultCurrent: 1,
            current : params.get('page')
            // current : page
            
        }} columns={columns} dataSource={data.filter((item)=>{
            return item.name?.toLowerCase().includes(searchValue.toLowerCase().trim() )|| item.province?.toLowerCase().includes(searchValue.toLowerCase().trim())
        })} onChange={onChange} />
         <Modal footer={<>
            <span onClick={()=>{
                const formData =new FormData()
                formData.append('location',document.getElementById('fileImageLocation').files[0])

                dispatch(postAnhViTri({
                    file : formData,
                    locationId : locationId
                }))
            }} className="inline-block py-1 px-2 text-white bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 ">Cập nhập</span>
            <span onClick={handleCancel} className="inline-block py-1 px-2 bg-red-500 rounded-md text-white cursor-pointer transition-all duration-300 hover:bg-red-600 mx-2" >Cancel</span>
         </>}  title={<div className="text-center text-2xl  text-green-500" style={{ fontFamily: "'Edu TAS Beginner', cursive" }}>Thêm ảnh du lịch!!!</div>} visible={isModalVisible}  onCancel={handleCancel}>
                <div className="">
                <button onClick={()=>fileRef.current.click()} className="inline-block py-1 text-white px-2 bg-primary rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600 ">Chọn ảnh</button>
                    <input ref={fileRef} id="fileImageLocation" className='hidden' onChange={handleChangeImage} type="file" name=""  />
                    <br />
                <img src={img || 'https://1.bp.blogspot.com/-RoOiYu8pweY/YGLZiX0bQ_I/AAAAAAAArE4/4AUbslYlESME_-arrxmvha763Te_jh1kwCNcBGAsYHQ/s0/ff99e81f59e3a9c02ff4f799f35cfc90.jpeg'} className='w-80 h-72 rounded-md mt-3 block' alt="" />
                </div>
            </Modal>
    </>
  )
}
