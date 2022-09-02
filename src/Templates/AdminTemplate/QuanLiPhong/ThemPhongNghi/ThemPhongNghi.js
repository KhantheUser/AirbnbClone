import React, { useState } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import {useFormik,ErrorMessage,Formik,Field } from 'formik'
import {string,object,boolean,number} from 'yup';
import { useParams,useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  
  Form,
  Input,
  InputNumber,
  Radio,
  
  Switch,
  
} from 'antd';
import { postTaoPHong } from '../../../../Slices/roomSlice';




 const ThemPhongNghi = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()
  
  const [componentSize, setComponentSize] = useState('default');
  const schema = object({
    name: string().required('Tên phòng là bắt buộc'),
    description: string().required('Mô tả là bắt buộc'),
    bath : number().required('Số phòng là bắt buộc').min(0,'Số phòng không được bé hơn 0'),
    
    guests : number().required('Số phòng là bắt buộc').min(0,'Số phòng không được bé hơn 0'),
    bedRoom : number().required('Số phòng là bắt buộc').min(0,'Số phòng không được bé hơn 0'),
    price : number().required('Số phòng là bắt buộc').min(0,'Giá tiền không được bé hơn 0')
  })
  const formik = useFormik({

    initialValues : {
     
    name: "",
  guests: 1,
  bedRoom: 1,
  bath: 1,
  description: '',
  price: 100000,
  elevator: false,
  hotTub: false,
  pool: false,
  indoorFireplace: false,
  dryer: false,
  gym: false,
  kitchen: false,
  wifi: false,
  heating: false,
  cableTV: false,
  locationId:id
      
    },
    validationSchema :schema,
    
    onSubmit : (values)=>{
   
      dispatch(postTaoPHong(values))
    }
  })

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeSwitch = (name)=>{

    return (value)=> formik.setFieldValue(name,value)
  }
  const handleChangeInputNumber = (name)=>{
    return (value)=>formik.setFieldValue(name,value)
  }

  return (
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
      <Form.Item label="Tên nhà nghỉ" >
        

        <Input name='name' onChange={formik.handleChange}/>
        {formik.errors.name && formik.touched.name && (
  <p className="text-red-500">{formik.errors.name}</p>
)}
        
      </Form.Item>
       
      <Form.Item label="Số phòng khách" >
        <InputNumber  onChange={handleChangeInputNumber('guests')}/>
       {formik.errors.guests && formik.touched.guests && (
  <p className="text-red-500">{formik.errors.guests}</p>
)}
      </Form.Item>
      <Form.Item label="Số phòng ngủ">
                <InputNumber  onChange={handleChangeInputNumber('bedRoom')}/>
{formik.errors.bedRoom && formik.touched.bedRoom && (
  <p className="text-red-500">{formik.errors.bedRoom}</p>
)}

      
      </Form.Item>
      <Form.Item label="Số phòng tắm" >
                <InputNumber name='bath'  onChange={handleChangeInputNumber('bath')}/>
               {formik.errors.bath && formik.touched.bath && (
  <p className="text-red-500">{formik.errors.bath}</p>
)} 

       
      </Form.Item>
      <Form.Item label="Mô tả" >
        <Input name="description" onChange={formik.handleChange}/>
       {formik.errors.description && formik.touched.description && (
  <p className="text-red-500">{formik.errors.description}</p>
)}
      </Form.Item>
       <Form.Item label="Giá thuê">
        <InputNumber onChange={handleChangeInputNumber('price')} name="price"/>
       {formik.errors.price && formik.touched.price && (
  <p className="text-red-500">{formik.errors.price}</p>
)}
      </Form.Item>
     
      
     
    <div className="flex flex-wrap pl-28">
         <Form.Item className="w-6/12" label="Elevator" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('elevator')} />
      </Form.Item>
       <Form.Item className="w-6/12" label="Hottub" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('hotTub')}/>
      </Form.Item>
       <Form.Item  className="w-6/12" label="Pool" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('pool')}/>
      </Form.Item>
       <Form.Item className="w-6/12" label="Indoor Fireplace" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('indoorFireplace')}/>
      </Form.Item>
       <Form.Item className="w-6/12" label="Dryer" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('dryer')}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Gym" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('gym')}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Kitchen" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('kitchen')}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Wifi" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('wifi')}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Heating" valuePropName="checked">
        <Switch onChange={handleChangeSwitch('heating')}/>
      </Form.Item>
      <Form.Item className="w-6/12 " label="CableTV" valuePropName="checked">
        <Switch  onChange={handleChangeSwitch('cableTV')}/>
      </Form.Item>
    </div>
     
      
      <Form.Item label="Tạo phòng">
        <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">Submit</button>
      </Form.Item>
    </Form>
   </Formik>
  );
};
export default ThemPhongNghi
