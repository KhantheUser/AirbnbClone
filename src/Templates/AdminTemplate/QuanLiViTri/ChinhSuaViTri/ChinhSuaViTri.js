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
import { getPostionDetail, putCapNhapViTri } from '../../../../Slices/positionSlice';

export default function ChinhSuaViTri() {
  const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id);
   
    const {positionDetail} = useSelector((state)=>state.position)
  const [componentSize, setComponentSize] = useState('default');
   
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const schema = object({
    
   
    name: string().required('Tên không được để trống').matches(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,{
        message : 'Tên sai định dạng'
    }),
    country: string().required('Tên không được để trống').matches(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,{
        message : 'Quốc gia sai định dạng'
    }),
    province: string().required('Tên không được để trống').matches(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/,{
        message : 'Tỉnh/thành sai định dạng'
    }),
    valueate: number().required('Đánh giá không được để trống').min(0,'Đánh giá không được bé hơn không').max(10,"Đánh giá không được lớn hơn 10"),
  
})
    const formik = useFormik({
    enableReinitialize : true,
    initialValues : {
        _id:positionDetail?._id,
    name: positionDetail?.name,
    province: positionDetail?.province,
    country: positionDetail?.country,
    
    valueate: positionDetail?.valueate

   
      
    },
    validationSchema :schema,
    
    onSubmit : (values)=>{
      
const id = values._id
delete values._id
    dispatch(putCapNhapViTri({
      thongTinCapNhap : values,
      locationId : id
    }))
    
    }
  })
  const handleChangeInputNumber = (name)=>{
    return (value)=>formik.setFieldValue(name,value)
  }

  useEffect(()=>{
    dispatch(getPostionDetail(id))
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
      <Form.Item label="Tên địa danh" >
        <Input name='name' value={formik.values.name} onChange={formik.handleChange} />        
        {formik.errors.name && formik.touched.name && (
  <p className="text-red-500 m-0">{formik.errors.name}</p>
)}      
      </Form.Item>
       <Form.Item label="Tỉnh/Thành phố" >      
        <Input name='province'  onChange={formik.handleChange} value={formik.values.province}/>       
         {formik.errors.province && formik.touched.province && (
  <p className="text-red-500 m-0">{formik.errors.province}</p>
)}      
      </Form.Item>
       <Form.Item label="Quốc gia" >       
        <Input name='country' onChange={formik.handleChange} value={formik.values.country}/>  
         {formik.errors.country && formik.touched.country && (
  <p className="text-red-500 m-0">{formik.errors.country}</p>
)}           
      </Form.Item>
     
      <Form.Item label="Đánh giá" onChange={formik.handleChange} >       
        <InputNumber name='valueate' value={formik.values.valueate}  onChange={handleChangeInputNumber('valueate')}/>
               {formik.errors.valueate && formik.touched.valueate && (
  <p className="text-red-500">{formik.errors.valueate}</p>
)} 
      </Form.Item>
      
       
  
       
       
     
      
     
    
     
      
      <Form.Item label="Tác vụ">
        <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">Submit</button>
      </Form.Item>
    </Form>
    
   </Formik>
   
    </>
  )
}
