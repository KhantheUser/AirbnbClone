import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { history } from "../App";
import userManageAPI from "../Services/userManageAPI";
import HomeTemplate from "../Templates/HomeTemplate/HomeTemplate";
import { USER_LOGIN } from "../Util/config";
import { postDangNhap } from "./userAuthSlice";


export const getUserInfo = createAsyncThunk('userManage/getUserInfo', async (userId) => {
    try{
        const data = await userManageAPI.getUserInfo(userId)
      
        return data
    }catch(e){
        console.log(e);
    }
})
export const postChangeAvatar = createAsyncThunk('userManage/postChangeAvatar', async (url,{dispatch}) => {
    try{
        const data = await userManageAPI.postChangeAvatar(url)
       
        return data
    }catch(e){
        console.log(e);
    }
})

export const getUserList = createAsyncThunk('userManage/getUserList', async () => {
    try{
        const data = await userManageAPI.getUserList()
        
        return data
    }catch(e){
        console.log(e);
    }
})
export const getUserPagination = createAsyncThunk('userManage/getUserPagination',async(page)=>{
    try{
       
        const data = await userManageAPI.getUserPagination(page)
        
        return data
    }catch(e){
        console.log(e);
    }
})
export const deleteUser = createAsyncThunk('userManage/deleteUser', async (thongTinXoa,{dispatch}) => {
    try{
        const data = await userManageAPI.deleteUser(thongTinXoa.userId)
        
        dispatch(getUserList())
        
        return data
    }catch(e){
        console.log(e);
    }
})
export const putCapNhapUser = createAsyncThunk('userManage/putCapNhapUser', async (thongTinCapNhap,{dispatch})=>{
      try{
        
          const data = await userManageAPI.putCapNhapUser(thongTinCapNhap)
       dispatch(getUserList())
       history.goBack()
       
alert('Cập nhập thành công')
        
      
    }catch(e){
        console.log(e);
    }
})
export const postTaoAdmin = createAsyncThunk('userManage/postTaoAdmin', async(thongTinAdmin)=>{
    try{
        const data = await userManageAPI.postTaoAdmin(thongTinAdmin)
       

    }catch(e){
        console.log(e);
    }
})


const userManageSlice = createSlice({
    name: "userManage",
    initialState: {
        isLoading : false,
        userInfo : null,
        avatar : null,
        userList : [],
        userPagination : [],
        isModalUpdate : false,

       
    },
    reducers: {
        handleModalUpdateUser : (state,{payload})=>{
            return {...state,isModalUpdate :payload}
        }
    },
    extraReducers: {
        [getUserInfo.pending] : (state,{payload})=>{
            state.isLoading = true
        }   ,
        [getUserInfo.fulfilled] : (state,{payload})=>{
            state.isLoading = false
            state.userInfo = payload
        },
        [getUserList.pending] : (state,{payload})=>{
            state.isLoading = true
        },
        [getUserList.fulfilled] : (state,{payload})=>{
            state.isLoading = false;
            state.userList = payload
        },
        [getUserPagination.pending] : (state,{payload})=>{
            state.isLoading = true
        },
        [getUserPagination.fulfilled]:(state,{payload})=>{
            state.isLoading = false;
            state.userPagination = payload
        },
        [putCapNhapUser.fulfilled] : (state,{payload})=>{
            state.isModalUpdate = true;
        },
        [postTaoAdmin.fulfilled] : (state,{payload})=>{
            state.isModalUpdate = true
        }
    }
})

export default userManageSlice.reducer;
export const {setModal,handleVisibleModal,handleModalUpdateUser} = userManageSlice.actions