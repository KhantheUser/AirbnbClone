import React from 'react'
import { useLocation} from 'react-router-dom'
import cn from 'classnames'

export default function Footer() {
 const location = useLocation()
  return (
   <div className={cn("grid grid-cols-9  pb-20 pt-6",{
    'hidden' : location.pathname === '/'
   })} style={{backgroundColor: 'rgb(247,247,247)',borderTop:'1px solid #ccc'}}>
      <div className='col-start-2 col-span-7 '>
            <div className='flex flex-wrap'>
                <div className=' w-72 mt-6 pr-6' >
                    <h2 className="text-base">Hỗ trợ</h2>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="https://www.airbnb.com.vn/help/?audience=guest">Trung tâm trợ giúp</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="https://www.airbnb.com.vn/aircover">AirCover</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="https://www.airbnb.com.vn/trust">Thông tin an toàn</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="https://www.airbnb.com.vn/accessibility">Hỗ trợ người khuyết tật</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Các tùy chọn hủy</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Báo cáo lo ngại của hàng xóm</a>
                </div>
                 <div className=' w-72 mt-6' >
                         <h2 className="text-base">Cộng đồng</h2>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Airbnb.org: nhà ở cứu trợ</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Hỗ trợ dân tị nạn Afghanistan</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Chống phân biệt đối xử</a>
                    
                </div>
                 <div className=' w-72 mt-6' >
  <h2 className="text-base">Đón tiếp khách</h2>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Thử đón tiếp khách</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">AirCover cho Chủ nhà</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Xem tài nguyên đón tiếp khách</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Truy cập diễn đàn cộng đồng</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Đón tiếp khách có trách nhiệm</a>
                </div>
                 <div className=' w-72 mt-6' >
                     <h2 className="text-base">Airbnb</h2>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Trang tin tức</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Tìm hiểu các tính năng mới</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Thư ngỏ từ các nhà sáng lập</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Cơ hội nghề nghiệp</a>
                    <a className="block text-black hover:text-black hover:underline mt-3" href="">Nhà đầu tư</a>
                </div>
            </div>
      </div>

   </div>
  )
}
