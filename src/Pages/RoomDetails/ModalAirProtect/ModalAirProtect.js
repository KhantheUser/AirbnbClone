import React, { useState } from 'react'
import {  Modal } from 'antd';

export default function ModalAirProtect() {
     const [isModalVisible, setIsModalVisible] = useState(false);
     const showModal = () => {
    setIsModalVisible(true);
  };
      const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
        <p onClick={showModal} className="text-base underline font-medium cursor-pointer">Tìm hiểu thêm</p>
                                <Modal  footer={null}  width={1034}  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="p-3">
                <div className=" mt-10 pb-3" style={{borderBottom:'1px solid #ccc'}}>
                    <img className='w-2/12 mb-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
                    <p className="font-normal text-base">AirCover là chương trình bảo vệ toàn diện, được áp dụng miễn phí với mọi đặt phòng.</p>
                </div>
                <div className='grid grid-cols-12 mt-6'>
                    <div className="col-span-6 pr-6">
                        <div>
                            <h2 className="text-base">Bảo đảm bảo vệ đặt phòng</h2>
                            <p className="text-base text-gray-500 font-light">Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng của bạn trong vòng 30 ngày trước ngày nhận phòng, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc sẽ hoàn tiền cho bạn.</p>
                        </div>
                        <div>
                            <h2 className="text-base">Bảo đảm chi phí tương xứng</h2>
                            <p className="text-base text-gray-500 font-light">
                                Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc số phòng ngủ ít hơn so với thông tin trên mục cho thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 pl-6">
                        <div>
                            <h2 className="text-base">Bảo đảm nhận phòng</h2>
                            <p className="text-base text-gray-500 font-light">Nếu bạn không thể nhận phòng và Chủ nhà không thể giải quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc chúng tôi sẽ hoàn tiền cho bạn.</p>
                        </div>
                        <div>
                            <h2 className="text-base">Đường dây an toàn 24 giờ</h2>
                            <p className="text-base text-gray-500 font-light">Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt của chúng tôi, bất kể ngày đêm.</p>
                        </div>
                    </div>
                </div>
                <p className="text-base mt-4 m-0">Hãy truy cập <span className='font-medium underline'>Trung tâm trợ giúp</span> của chúng tôi để biết đầy đủ thông tin chi tiết về cách Airbnb bảo vệ đặt phòng của bạn</p>
        </div>
      </Modal>
    </>
  )
}
