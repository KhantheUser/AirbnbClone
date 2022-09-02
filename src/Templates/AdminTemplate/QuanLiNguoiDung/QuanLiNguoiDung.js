import { Input, Modal, Table } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react'

import { BsSearch } from 'react-icons/bs';
import './QuanLiNguoiDung.scss'
import { deleteUser, getUserList } from '../../../Slices/userManage';

import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import {useFormik,ErrorMessage,Formik,Field } from 'formik'

export default function QuanLiNguoiDung() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
const {userList} = useSelector((state)=>state.userManage)

// const [userInfo,setUserInfo] = useState(null)
    const [searchValue ,setSearchValue] = useState('')
    const [page,setPage] = useState()
   
  const [isModalVisible, setIsModalVisible] = useState(false);

const data = userList



    const columns = [
  {
    title: 'STT',
    dataIndex: '_id',
   
    width:'10%',
    render : (text,name)=>{
        return <span>{text?.length >10? text.slice(0,10)+'...':text}</span>
    },
    sorter: (a, b) => a._id - b._id,
    sortDirections: ['descend','ascend'],
  },
   {
    title: 'Name',
    dataIndex: 'name',
   

    width:'20%',
    render : (text,name)=>{
        return <span>{text}</span>
    },
    
  },
  {
    title: 'Email',
    dataIndex: 'email',
   

    width:'15%',
    render : (text,name)=>{
        return <span>{text?.length >20? text.slice(0,16)+'...':text}</span>
    },
   
  },
   {
    title: 'Phone',
    dataIndex: 'phone',
    width:'10%',
   

    render : (text,name)=>{
        return <span>{text}</span>
    },
  
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width:'5%',
  

    render : (text,name)=>{
        return <span>{text?'Nam':'Nữ'}</span>
    },
   
  },
  {
    title: 'Role',
    dataIndex: 'type',
    width:'5%',
    

    render : (text,name)=>{
        return <span>{text?.length >20? text.slice(0,16)+'...':text}</span>
    },
   
  },
  {
    title: 'Address',
    dataIndex: 'address',
     width:'15%',


    render : (text,name)=>{
        return <span>{text?.length>15? text.slice(0,15)+'...':text}</span>
    },
   
  },
  {
    title: '',
    dataIndex: 'actions',
    width:'',
   

    render : (text,name)=>{
       return (
        <div className="flex justify-center text-white">
            <span onClick={()=>{
         
              navigate(`edit-admin/${name?._id}`)


            }} className="inline-block py-1 px-2 bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 mx-2 ">Xem & Sửa</span>
            <span onClick={() => dispatch(deleteUser({
                            userId: name._id,
                           
                        }))} className="inline-block py-1 px-2 bg-red-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600">Xóa</span>
       </div>
       )
    },
   
  },
];
const onChange = (pagination) => {
  setPage(pagination.current)
};
const { Search } = Input;
const suffix = (
  <BsSearch
    style={{
    
      fontSize: 16,
      color: '#ff385c',
    }}
  />
);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  //   // window.location.reload()
  //   // resetField({
  //   //   name : userInfo.name
  //   // })
  
  // };
  const timeSearchRef = useRef()
  const handleSearchValue = (e)=>{

    clearTimeout(timeSearchRef.current)
     timeSearchRef.current = setTimeout(()=>{
        setSearchValue(e.target.value)
        
        
     },300)
     
     
    }
    
 
   
    
useEffect(()=>{
    dispatch(getUserList())
},[])
const onSearch = (value) => console.log(value);
  return (
    <div className="quanliuser">
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
//           defaultCurrent : 1
       current : page

        }} columns={columns} style={{
            
        }}  dataSource={data?.filter((item)=>item.email?.includes(searchValue)||item.phone?.includes(searchValue))} onChange={onChange} key={Math.random()} />
          {/* <Modal width={700} visible={isModalVisible} footer={<button  className={cn("p-2 bg-green-500 inline-block text-white rounded-md cursor-pointer transition-all hover:bg-green-600 duration-300", )}>Cập nhập</button>} onOk={handleOk} onCancel={handleCancel}>

                <div className='flex mt-10' >
                    <div className='w-1/3 '>
                        <div className="h-36 w-36 mx-auto rounded-full overflow-hidden">
                            <img className="h-full w-full" src={userInfo?.avatar || "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"} alt="" />
                        </div>
                    </div>

                    <div className=' w-2/3'>
                      <form action="">
                          <div className="text-base flex items-center my-2">
                            <span className=" w-36 font-medium ">
                                ID:
                            </span>

                            <div className="flex-1  w-full outline-none bg-blue-50 rounded-md" style={{ border: '1px solid #ccc' }}>

                                <input  disabled id="id" className="cursor-not-allowed p-2 w-full outline-none bg-blue-50 " value={userInfo?._id} type="text" />

                            </div>

                        </div>
                        
                        <div className="text-base flex items-center my-2">
                            <span className=" w-36 font-medium ">
                                Họ và tên :
                            </span>
 
                            <div  className="flex-1 rounded-md overflow-hidden" style={{ border: '1px solid #ccc' }}>

                                <input className={cn("p-2 w-full outline-none  bg-blue-50")}    type="text" />


                            </div>

                        </div>
                        <button type="submit">Submit</button>
                      </form>
                        

                    </div>



                </div>

            </Modal> */}
    </div>
  )
}
