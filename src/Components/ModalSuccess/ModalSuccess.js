// import {Modal} from 'antd'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

// export default function ModalSuccess() {
//     const [isModalUpdate, setIsModalVisible] = useState(false)
//     const {isModalUpdate} = useSelector((state)=>state.userManage)
//     const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <Modal footer={null} title={<div className="text-center text-2xl  text-green-500" style={{ fontFamily: "'Edu TAS Beginner', cursive" }}>Bạn đã cập nhập thành công !!!</div>} visible={isModalUpdate} onCancel={handleCancel}>
//                 <div className="flex justify-center">
//                     <img src="https://media4.giphy.com/media/ibolLe3mOqHE3PQTtk/200w.gif?cid=82a1493bbwnw6kgbawd6bidtieodzx5jvl0ym7y8i2ke5lb8&rid=200w.gif&ct=g" alt="" />
//                 </div>
//             </Modal>
//   )
// }
