import React, { useEffect, useState } from 'react'
import {useFormik,ErrorMessage,Formik,Field } from 'formik'
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs'
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
import { object,string,boolean,number } from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import { getUserInfo, handleModalUpdateUser, postTaoAdmin, putCapNhapUser } from '../../../../Slices/userManage';
import moment from 'moment';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import cn from 'classnames'
import useCheckEmailExit from '../../../../CustomHook/useCheckEmailExit';
import { postDangKy } from '../../../../Slices/userAuthSlice';
export default function ThemQuanTri() {
  const [isShowPass , setIsShowPass] = useState(false)
  const {isModalUpdate} = useSelector((state)=>state.userManage)
  const {isExitEmail, handleCheckEmail} = useCheckEmailExit()
  const dispatch = useDispatch()


  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const schema = object({
    email: string().required('Email không được để trống').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,{
        message : "Email phải có định dạng test@gmail.com"
    }),
    password: string().required('Mật khẩu không được để trống').matches(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,50})$/g,{
        message : 'Mật khẩu tối thiểu 8 kí tự , gồm ít nhất 1 chữ cái , 1 số , không kí tự đặc biệt'
    }),
    name: string().required('Tên không được để trống').matches(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,{
        message : 'Tên sai định dạng'
    }),
    phone: string().required('Số điện thoại không được để trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g,{
        message : 'Số điện thoại không đúng định dạng'
    }),
    birthday: string().required('Ngày sinh không được để trống'),
    // gender: boolean().required('Giới tính không được để trống'),
    address: string().required('Địa chỉ không được để trống'),
})

    const formik = useFormik({
    enableReinitialize : true,
   initialValues :{
 name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    gender: false,
    address: '',
    
   },
    validationSchema :schema,
    
    onSubmit : (values)=>{
      values.type= 'ADMIN'
     console.log(values);
      dispatch(postTaoAdmin(values))
      
    }
  })
  const handleCancelModalUpdate = ()=>{
      dispatch(handleModalUpdateUser(false))
  }
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
  const handleChangeDay = (date,dateString)=>{
      const ngaySinh = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      console.log(ngaySinh)
      formik.setFieldValue('birthday',ngaySinh)
  }
  
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
     
      <Form.Item label="Họ và tên" >
        <Input name='name'  onChange={formik.handleChange} />        
        {formik.errors.name && formik.touched.name && (
  <p className="text-red-500 m-0">{formik.errors.name}</p>
)}      
      </Form.Item>
       <Form.Item label="Email" >      
        <Input name='email'  onChange={formik.handleChange} onInput={handleCheckEmail} />       
         {formik.errors.email && formik.touched.email && (
  <p className="text-red-500 m-0">{formik.errors.email}</p>

)}      
              {!isExitEmail && <p className="m-0 text-red-500 text-md italic text-left mt-2">Email đã tồn tại</p>}
      </Form.Item>
      <Form.Item label="Mật khẩu" >
      <div className="relative">
        <Input type={isShowPass ? 'text':'password'} name='password'  onChange={formik.handleChange} />    
        <span onClick={()=>setIsShowPass(!isShowPass)} className="absolute top-2 right-1">
        <AiOutlineEye className={cn('text-lg cursor-pointer',{
            hidden : !isShowPass
        })}/>
            <AiOutlineEyeInvisible className={cn('text-lg cursor-pointer',{
            hidden : isShowPass
        })} />
        </span>
      </div>
            
        {formik.errors.password && formik.touched.password && (
  <p className="text-red-500 m-0">{formik.errors.password}</p>
)}      
      </Form.Item>
       <Form.Item label="Số điện thoại" >       
        <Input name='phone' onChange={formik.handleChange} />  
         {formik.errors.phone && formik.touched.phone && (
  <p className="text-red-500 m-0">{formik.errors.phone}</p>
)}           
      </Form.Item>
       <Form.Item label="Ngày sinh" onChange={handleChangeDay}>
        
       <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDay}  />
         {formik.errors.birthday && formik.touched.birthday && (
  <p className="text-red-500 m-0">{formik.errors.birthday}</p>
)}      
      </Form.Item>
      <Form.Item label="Địa chỉ" onChange={formik.handleChange} >  
    
        <Input name='address'  onChange={formik.handleChange}/>       
            
         
         {formik.errors.address && formik.touched.address && (
  <p className="text-red-500 m-0">{formik.errors.address}</p>
)}      
      </Form.Item>
       
     
   <Form.Item   label="Giới tính" valuePropName="checked">
   <span className="mr-2 inline-block w-12">Nữ</span>
        <Switch name='gender' onChange={handleChangeSwitch('gender')}   />
       <span className="ml-2">Nam</span>

      </Form.Item>
       <Form.Item   label="Quyền hạn" valuePropName="checked">
        <span className="mr-2">CLIENT</span>
        <Switch  checked={true} />
       <span className="ml-2">ADMIN</span>
      </Form.Item>
       
       
     
      
     
    
     
      
      <Form.Item label="Tác vụ">
        <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">Submit</button>
      </Form.Item>
    </Form>
    
   </Formik>
   <Modal  title={<div className="text-center text-2xl  text-green-500" style={{ fontFamily: "'Edu TAS Beginner', cursive" }}>Bạn đã tạo thành công !!!</div>} visible={isModalUpdate} onOk={handleCancelModalUpdate} onCancel={handleCancelModalUpdate}>
                <div className="flex justify-center">
                    <img src="https://media4.giphy.com/media/ibolLe3mOqHE3PQTtk/200w.gif?cid=82a1493bbwnw6kgbawd6bidtieodzx5jvl0ym7y8i2ke5lb8&rid=200w.gif&ct=g" alt="" />
                </div>
            </Modal>
           </>
  )
}
