import axiosClient from './axiosClient'

const roomAPI = {
    getRoomList : (locationId)=>{
        return axiosClient.get('api/rooms',{
            params:{
                locationId : locationId
            }
        })
    },
    getRoomDetails : (roomId)=>{
        return axiosClient.get(`api/rooms/${roomId}`)
    },
    postDatPhong : (thongTinPhongDat)=>{
        return axiosClient.post('api/rooms/booking',thongTinPhongDat)
    },
    postTaoPhong : (thongTinTaoPhong)=>{
        return axiosClient.post(`api/rooms`,thongTinTaoPhong)
    },
    postAnhPhong : (thongTinAnh)=>{
        return axiosClient.post(`api/rooms/upload-image/${thongTinAnh.roomId}`,thongTinAnh.file)
    },
    putCapNhapPhong : (thongTinCapNhap)=>{
        return axiosClient.put(`api/rooms/${thongTinCapNhap.roomId}`,thongTinCapNhap.data)
    },
    deletePhong : (roomId)=>{
        return axiosClient.delete(`api/rooms/${roomId}`)
    }
}
export default roomAPI