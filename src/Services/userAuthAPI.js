import axiosClient from './axiosClient'

const userAuthAPI = {
    postDangNhap : (thongTinDangNhap)=>{
        return axiosClient.post('api/auth/login',thongTinDangNhap);
    },
    postDangKy : (thongTinDangKy)=>{
        return axiosClient.post('api/auth/register',thongTinDangKy)
    }
}
export default userAuthAPI