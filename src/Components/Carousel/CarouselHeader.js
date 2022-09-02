import React, { useRef, useState } from 'react'
import { Carousel } from 'antd';
import ReactPlayer from 'react-player'
import { MdArrowForwardIos,MdArrowBackIos} from "react-icons/md"


import './CarouselHeader.scss'
import { FaPlay } from 'react-icons/fa';
export default function CarouselHeader() {
  const carouselRef = useRef()
  const [video,setVideo] = useState('')
  const images = [
    {
      id:1,
      url:"https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627961881-images10898921-1611196252800651567316.jpg",
      video :'https://www.youtube.com/watch?v=lTCsqTlcjvg&ab_channel=K%C3%AAnhchias%E1%BA%BB'
    },
    {
      id:2,
      url:"https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/02/anh-3.jpg",
      video:'https://www.youtube.com/watch?v=EsJZRYcQYSQ&ab_channel=Ki%E1%BA%BFntr%E1%BA%AFng'
    },
    {
      id:3,
      url:"https://www.quangbinhtravel.vn/wp-content/uploads/2020/09/dong-phong-nha.jpg",
      video:'https://www.youtube.com/watch?v=coigv_QXUGQ&ab_channel=Xu%C3%A2nH%C3%A0L%C3%AA'
    },
    {
      id:4,
      url:"https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627963639-5f9bf78b329f7bdf8ceee0fd55fc2176.jpg",
      video:'https://www.youtube.com/watch?v=XeqbHTuP6nM&ab_channel=NTVmedia'
    }
  ]
   const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
 const onChange = (currentSlide) => {
    document.getElementById('reactVideo').style.zIndex = '-1';
    setVideo('')
  };
    const renderBanner = ()=>{
      return images.map((item,index)=>{
        return (
          <div key={index} onClick={()=>{
            document.getElementById('reactVideo').style.zIndex = '2'
            setVideo(item.video)
          }}>

          <div  style={{backgroundImage:`url('${item.url}')`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',height:"500px",position:'relative'}}>
        <div className="circle cursor-pointer">
    <p className="flex justify-center items-center ">{<FaPlay style={{fontSize:20,lineHeight:50,position: 'relative',top:'23px',left:'1px',color:'#ff385c'}}/>}</p>
  </div>
            
          </div>
            </div>
        )
      }
      )
    }
  return (
    <div className='carouselHeader relative' >
   
<div id="reactVideo"  style={{zIndex:'-1',position:'absolute',top:'22%',left:'50%',margin:'0 auto',display:'inline-block',transform:'translateX(-50%)'}}>
 
      <ReactPlayer  playing={true} controls={true}   url={video}  />
</div>
  
         <Carousel  afterChange={onChange} ref={carouselRef} >
      {renderBanner()}
    </Carousel>



    
        <span   className="absolute cursor-pointer hidden sm:block"  style={{top:'43%',left:'2%'}} onClick={()=>{
          carouselRef.current.prev()
          document.getElementById('reactVideo').style.zIndex = '-1'
          setVideo('')
        }}>
          <MdArrowBackIos className='text-5xl text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 '/>
        </span>
         <span  className="absolute cursor-pointer hidden sm:block"  style={{top:'43%',right:'2%'}} onClick={()=>{
          carouselRef.current.next()
          document.getElementById('reactVideo').style.zIndex = '-1'
          setVideo('')

         }}>
          <MdArrowForwardIos className='text-5xl text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 '/>
        </span>

      </div>
  
       
     
  )
}
