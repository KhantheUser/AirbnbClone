import React ,{useEffect, useState} from 'react'
import {useFormik,ErrorMessage,Formik,Field } from 'formik'
import {string,object,boolean,number} from 'yup';
import { useParams,useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  
  Form,
  Input,
  InputNumber,
  Radio,
  
  Switch,
  
} from 'antd';
import { getRoomDetails, putCapNhapPhong } from '../../../../Slices/roomSlice';
export default function ChinhSuaPhong() {
  const {id} = useParams()
  const {roomDetails} = useSelector((state)=>state.room)
  const [params,searchParams] = useSearchParams()


  
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
    enableReinitialize: true, 
    initialValues : {
  name: roomDetails?.name,
  guests: roomDetails?.guests,
  bedRoom: roomDetails?.bedRoom,
  bath: roomDetails?.bath,
  description: roomDetails?.description,
  price: roomDetails?.price,
  elevator: roomDetails?.elevator,
  hotTub: roomDetails?.hotTub,
  pool: roomDetails?.pool,
  indoorFireplace: roomDetails?.indoorFireplace,
  dryer: roomDetails?.dryer,
  gym: roomDetails?.gym,
  kitchen: roomDetails?.kitchen,
  wifi: roomDetails?.wifi,
  heating: roomDetails?.heating,
  cableTV: roomDetails?.cableTV,
  // locationId: roomDetails.locationId
      
    },
    validationSchema :schema,
    
    onSubmit : (values)=>{
      values.locationId = params.get('locationId');
      dispatch(putCapNhapPhong({
        roomId : id,
        data : values,
        
      }))
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
  useEffect(()=>{
    dispatch(getRoomDetails(id))
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
      <Form.Item label="Tên nhà nghỉ" >
        

        <Input name='name' onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name && formik.touched.name && (
  <p className="text-red-500">{formik.errors.name}</p>
)}
        
      </Form.Item>
       
      <Form.Item label="Số phòng khách" >
        <InputNumber  onChange={handleChangeInputNumber('guests')} value={formik.values.guests}/>
       {formik.errors.guests && formik.touched.guests && (
  <p className="text-red-500">{formik.errors.guests}</p>
)}
      </Form.Item>
      <Form.Item label="Số phòng ngủ">
                <InputNumber  onChange={handleChangeInputNumber('bedRoom')} value={formik.values.bedRoom}/>
{formik.errors.bedRoom && formik.touched.bedRoom && (
  <p className="text-red-500">{formik.errors.bedRoom}</p>
)}

      
      </Form.Item>
      <Form.Item label="Số phòng tắm" >
                <InputNumber name='bath'  onChange={handleChangeInputNumber('bath')} value={formik.values.bath}/>
               {formik.errors.bath && formik.touched.bath && (
  <p className="text-red-500">{formik.errors.bath}</p>
)} 

       
      </Form.Item>
      <Form.Item label="Mô tả" >
        <Input name="description" onChange={formik.handleChange} value={formik.values.description}/>
       {formik.errors.description && formik.touched.description && (
  <p className="text-red-500">{formik.errors.description}</p>
)}
      </Form.Item>
       <Form.Item label="Giá thuê">
        <InputNumber onChange={handleChangeInputNumber('price')} name="price" value={formik.values.price}/>
       {formik.errors.price && formik.touched.price && (
  <p className="text-red-500">{formik.errors.price}</p>
)}
      </Form.Item>
     
      
     
    <div className="flex flex-wrap pl-28">
         <Form.Item className="w-6/12" label="Elevator" valuePropName="checked">
        <Switch name='elevator' onChange={handleChangeSwitch('elevator')} checked={formik.values.elevator}/>
      </Form.Item>
       <Form.Item  className="w-6/12" label="Hottub" valuePropName="checked">
        <Switch name='hotTub' onChange={handleChangeSwitch('hotTub')} checked={formik.values.hotTub}/>
      </Form.Item>
       <Form.Item  className="w-6/12" label="Pool" valuePropName="checked">
        <Switch name='pool' onChange={handleChangeSwitch('pool')} checked={formik.values.pool}/>
      </Form.Item>
       <Form.Item className="w-6/12" label="Indoor Fireplace" valuePropName="checked">
        <Switch name='indoorFireplace' onChange={handleChangeSwitch('indoorFireplace')} checked={formik.values.indoorFireplace}/>
      </Form.Item>
       <Form.Item className="w-6/12" label="Dryer" valuePropName="checked">
        <Switch name='dryer' onChange={handleChangeSwitch('dryer')} checked={formik.values.dryer}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Gym" valuePropName="checked">
        <Switch name='gym' onChange={handleChangeSwitch('gym')} checked={formik.values.gym}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Kitchen" valuePropName="checked">
        <Switch name='kitchen' onChange={handleChangeSwitch('kitchen')} checked={formik.values.kitchen}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Wifi" valuePropName="checked">
        <Switch name='wifi' onChange={handleChangeSwitch('wifi')} checked={formik.values.wifi}/>
      </Form.Item>
      <Form.Item className="w-6/12" label="Heating" valuePropName="checked">
        <Switch name='heating' onChange={handleChangeSwitch('heating')} checked={formik.values.heating}/>
      </Form.Item>
      <Form.Item className="w-6/12 " label="CableTV" valuePropName="checked">
        <Switch name='cableTV'  onChange={handleChangeSwitch('cableTV')} checked={formik.values.cableTV}/>
      </Form.Item>
    </div>
     
      
      <Form.Item label="Cập nhập">
        <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">Submit</button>
      </Form.Item>
    </Form>
   </Formik>
   </>
  )
}
