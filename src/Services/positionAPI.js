import axiosClient from './axiosClient'

const positionAPI = {
    getPositionList : ()=>{
        return axiosClient.get(`api/locations`)
    },
  
    deletePosition : (locationId)=>{
        return axiosClient.delete(`api/locations/${locationId}`)
    },
    getPostionDetail : (locationId)=>{
        return axiosClient.get(`api/locations/${locationId}`)
    },
    putCapNhapViTri : (thongTinCapNhap)=>{
        return axiosClient.put(`api/locations/${thongTinCapNhap.locationId}`,thongTinCapNhap.thongTinCapNhap)
    },
    postAnhViTri : (thongTinAnh)=>{
        return axiosClient.post(`api/locations/upload-images/${thongTinAnh.locationId}`,thongTinAnh.file)
    },
    postTaoViTri : (thongTinTao)=>{
        return axiosClient.post(`api/locations`,thongTinTao)
    }

}
export default positionAPI