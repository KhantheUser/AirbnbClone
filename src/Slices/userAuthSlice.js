import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import userAuthAPI from "../Services/userAuthAPI";
import { Navigate } from "react-router-dom";



import { TOKEN, USER_LOGIN } from "../Util/config";
import { history } from "../App";

export const postDangNhap = createAsyncThunk('userAuth/postDangNhap', async(thongTinDangNhap) => {
 
        try{
            
            const data = await userAuthAPI.postDangNhap(thongTinDangNhap);
           
            return data
        }catch(e){
            console.log('sai mat hau tai khoan')
        }
    
})
export const postDangKy = createAsyncThunk('userAuth/postDangKy', async(thongTinDangKy)=>{

    try{
        console.log(thongTinDangKy);
        const data = await userAuthAPI.postDangKy(thongTinDangKy);
        alert('Tạo thành công')
        history.replace({
            pathname : '/login'
        })
        window.location.reload()
     
    }catch(e){
        console.log(e)
    }
})

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        isLoading: false,
        error : null ,
        userLogin : JSON.parse(localStorage.getItem(USER_LOGIN)) || {},
        isModalVisible : false
    },
    reducers: {
        handleModal : (state,{payload})=>{
            state.isModalVisible = false
        }
    },
    extraReducers: {
        [postDangNhap.pending]: (state, {payload}) => {
            state.isLoading = true;
        },
        [postDangNhap.fulfilled]: (state, {payload}) => {
          
            if(!payload){
                <Navigate to="/login"/>
                alert("Tài khoản hoặc mật khẩu không đúng")
            }else{
                localStorage.setItem(USER_LOGIN,JSON.stringify(payload))
                localStorage.setItem(TOKEN,JSON.stringify(payload.token))
            state.userLogin = payload;
                    
               history.replace({
                pathname:'/'
               })
               window.location.reload()
               
            }
            
        },
        [postDangKy.pending] :(state, {payload})=>{
            state.isLoading = true
        },
        [postDangKy.fulfilled] :(state, {payload})=>{
            state.isLoading = false;
            
        }
        
        
    }
})

export default userAuthSlice.reducer;
export const {handleModal} = userAuthSlice.actions