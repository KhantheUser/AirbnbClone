

import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import {useFormik,ErrorMessage,Formik,Field } from 'formik'
import { useParams } from 'react-router-dom';
import { object,string,boolean,number } from 'yup';
import { useDispatch,useSelector } from 'react-redux';



import moment from 'moment';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

import { getUserInfo, putCapNhapUser } from '../../../../Slices/userManage';

export default function ChinhSuaNguoiDung() {
  const dispatch = useDispatch()
    const {id} = useParams()
    const {userInfo,isModalUpdate} = useSelector((state)=>state.userManage)
  
   
   
    const {positionDetail} = useSelector((state)=>state.position)
  const [componentSize, setComponentSize] = useState('default');
    const handleChangeDay = (date,dateString)=>{
      const ngaySinh = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      
       formik.setFieldValue('birthday',ngaySinh)
   }
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
   const handleChangeSwitch = (name)=>{

     return (value)=>{
       if(name === 'type'){
           const data = value ? 'ADMIN':'CLIENT'
           formik.setFieldValue(name,data)
       }else{
           formik.setFieldValue(name, value);
       }
     }
 }
  const schema = object({
    
   
    name: string().required('Tên không được để trống').matches(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,{
        message : 'Tên sai định dạng'
    }),
        email: string().required('Email không được để trống').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,{
        message : "Email phải có định dạng test@gmail.com"
     }),
         phone: string().required('Số điện thoại không được để trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g,{
         message : 'Số điện thoại không đúng định dạng'
    }),
    address: string().required('Địa chỉ không được để trống'),
    birthday: string().required('Ngày sinh không được để trống'),
  
})
    const formik = useFormik({
    enableReinitialize : true,
    initialValues : {
        _id:userInfo?._id,
     name: userInfo?.name,
    email: userInfo?.email,
    birthday: userInfo?.birthday,
    phone: userInfo?.phone,
    address: userInfo?.address,
    gender: userInfo?.gender,
     type: userInfo?.type,
   

   
      
    },
    validationSchema :schema,
    
    onSubmit : (values)=>{
      
const id = values._id

delete values._id

     dispatch(putCapNhapUser({
         userId : id,
         thongTinCapNhap : values
      }))


    
    }
  })
  

  useEffect(()=>{
   dispatch(getUserInfo(id))
  },[])
  return (
    <>
         <Formik>
     <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="ID" >
        <Input value={formik.values._id} name='_id'  disabled/>       
      </Form.Item>
      <Form.Item label="Họ và tên" >
        <Input name='name' value={formik.values.name} onChange={formik.handleChange} />        
        {formik.errors.name && formik.touched.name && (
  <p className="text-red-500 m-0">{formik.errors.name}</p>
)}      
      </Form.Item>
       <Form.Item label="Email" >      
        <Input name='email'  onChange={formik.handleChange} value={formik.values.email}/>       
         {formik.errors.email && formik.touched.email && (
  <p className="text-red-500 m-0">{formik.errors.email}</p>
)}      
      </Form.Item>
       <Form.Item label="Số điện thoại" >       
        <Input name='phone' onChange={formik.handleChange} value={formik.values.phone}/>  
         {formik.errors.phone && formik.touched.phone && (
  <p className="text-red-500 m-0">{formik.errors.phone}</p>
)}           
      </Form.Item>
       <Form.Item label="Ngày sinh" onChange={handleChangeDay}>
     
       <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDay} value={moment(formik.values.birthday)}  />
        {formik.errors.birthday && formik.touched.birthday && (
  <p className="text-red-500 m-0">{formik.errors.birthday}</p>
 )}      
     </Form.Item>

       <Form.Item label="Địa chỉ" onChange={formik.handleChange} >       
         <Input name='address' value={formik.values.address} onChange={formik.handleChange}/>       
          {formik.errors.address && formik.touched.address && (
   <p className="text-red-500 m-0">{formik.errors.address}</p>
 )}      
       </Form.Item>

        <Form.Item   label="Giới tính" valuePropName="checked">
   <span className="mr-2 inline-block w-12">Nữ</span>
        <Switch name='gender' onChange={handleChangeSwitch('gender')}  checked={formik.values.gender}  />
       <span className="ml-2">Nam</span>

      </Form.Item>    
      
        <Form.Item   label="Quyền hạn" valuePropName="checked">
         <span className="mr-2">CLIENT</span>
         <Switch name='type'  onChange={handleChangeSwitch('type')} checked={formik.values.type ==='CLIENT' ?false:true } />
        <span className="ml-2">ADMIN</span>
       </Form.Item>
       
      
      <Form.Item label="Tác vụ">
        <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">Submit</button>
      </Form.Item>
    </Form>
    
   </Formik>
   
    </>
  )
}
