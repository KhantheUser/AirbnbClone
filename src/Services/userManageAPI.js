import axiosClient from './axiosClient'

const userManageAPI = {
    getUserInfo : (userId)=>{
        return axiosClient.get(`api/users/${userId}`)
    },
    postChangeAvatar : (url)=>{
        return axiosClient.post(`api/users/upload-avatar`,url)
    },
    getUserList  : ()=>{
        return axiosClient.get(`api/users`)

    },
    getUserPagination : (skip,limit=10)=>{
        return axiosClient.get(`api/users/pagination?skip=${skip}&limit=${limit}`)
    },
   
    deleteUser : (userId)=>{
        return axiosClient.delete(`api/users/${userId}`)
    },
    putCapNhapUser : (thongTinCapNhap)=>{
        return axiosClient.put(`api/users/${thongTinCapNhap.userId}`,thongTinCapNhap.thongTinCapNhap)

    },
    postTaoAdmin : (thongTinAdmin)=>{
        return axiosClient.post('api/users',thongTinAdmin)
    }
    
    
}
export default userManageAPI;