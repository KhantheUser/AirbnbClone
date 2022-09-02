import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { Navigate, useNavigate } from "react-router-dom";
import positionAPI from "../Services/positionAPI";
import {history} from '../App'

export const getPositionList = createAsyncThunk('position/getPositionList',async()=>{
    try{
        const data = await positionAPI.getPositionList()
        
        return data
    }catch(e){
        console.log(e);
    }
})
export const deletePosition = createAsyncThunk('position/deletePosition',async(locationId,{dispatch})=>{
    console.log(locationId);
    const data = await positionAPI.deletePosition(locationId)
    // history.goBack()
   dispatch(getPositionList())
    return data
})
export const getPostionDetail = createAsyncThunk('position/getPostionDetail',async(locationId)=>{
    const data = await positionAPI.getPostionDetail(locationId)
    return data
})
export const putCapNhapViTri = createAsyncThunk('position/putCapNhapViTri',async(thongTinCapNhap)=>{
   
    
   
    
    
    const data = await positionAPI.putCapNhapViTri(thongTinCapNhap)
    alert('Cập nhập thành công')
    
    history.goBack()
    
    
   
})
export const postAnhViTri = createAsyncThunk('position/postAnhViTri',async(thongTinAnh,{dispatch})=>{
    
    try{
        const data = await positionAPI.postAnhViTri(thongTinAnh)
    alert('Cập nhập ảnh thành công')
    dispatch(getPositionList())
    }catch(e){
        console.log(e)
    }
})
export const postTaoViTri = createAsyncThunk('position/postTaoViTri', async(thongTinTao,{dispatch})=>{
    
    const data = await positionAPI.postTaoViTri(thongTinTao)
    alert('Thêm thành công !')
    history.replace({
        pathname : '/admin/location?page=1'
    })
    dispatch(getPositionList())
   window.location.reload()
    
 
})
const positionSlice = createSlice({
    name: "position",
    initialState: {
        loading: false,
        error: null,
        positionArray : [],
        postionDetail : {}
    },
    reducers: {},
    extraReducers:{
        [getPositionList.pending]:(state,action)=>{
            state.loading = true;
        },
        [getPositionList.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.positionArray = payload;
        },
        [getPostionDetail.pending]: (state,{payload})=>{
            state.loading = true;

        },
        [getPostionDetail.fulfilled]: (state,{payload})=>{
            state.loading = false;
            state.positionDetail = payload;

        }
    }

})

export default positionSlice.reducer;
