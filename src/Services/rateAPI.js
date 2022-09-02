import axiosClient from './axiosClient';

const rateAPI = {
    getRatesForRoom : (roomId)=>{
        return axiosClient.get('api/reviews/byRoom',{
            params:{
                roomId : roomId
            }
        })
    },
    postDanhGia : (thongTinDanhGia)=>{
        return axiosClient.post(`api/reviews?roomId=${thongTinDanhGia.roomId}`,{
            content : thongTinDanhGia.content
        })
    },
    deleteDanhGia : (id)=>{
        return axiosClient.delete(`api/reviews/${id}`)
        
    },
    putCapNhapDanhGia : (thongTinCapNhap)=>{
        return axiosClient.put(`api/reviews/${thongTinCapNhap.maDanhGia}`,{
            content : thongTinCapNhap.content,
            roomId : thongTinCapNhap.maPhong,
            userId : thongTinCapNhap.userId
        })
    }
}
export default rateAPI;