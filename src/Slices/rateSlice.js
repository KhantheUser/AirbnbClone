import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import rateAPI from "../Services/rateAPI";

export const getRatesForRoom = createAsyncThunk("room/getRatesForRoom",async(roomId)=>{
    try{
        const data = await rateAPI.getRatesForRoom(roomId);
        console.log(data);
        return data
    }catch(e){
        console.log(e);
    }
})
export const postDanhGia = createAsyncThunk("room/postDanhGia",async(thongTinDanhGia)=>{
    try{
       
        const data = await rateAPI.postDanhGia(thongTinDanhGia)
       
       
    }catch(e){
        console.log(e);
    }
})
export const putCapNhapDanhGia = createAsyncThunk("room/postCapNhapDanhGia",async(thongTinCapNhap)=>{
    try {
      
        const data = await rateAPI.putCapNhapDanhGia(thongTinCapNhap)
       
        
      
    }catch(e){
        console.log(e);
    }
})
export const deleteDanhGia = createAsyncThunk("room/deleteDanhGia",async(thongTinXoa,{dispatch})=>{
    try{
       
        const data = await rateAPI.deleteDanhGia(thongTinXoa.maDanhGia)
        dispatch(getRatesForRoom(thongTinXoa.maPhong))
       
    }catch(e){
        console.log(e);
    }
})
const rateSlice = createSlice({
    name: "rate",
    initialState: {
        loading  : false,
        error    : null,
        rateArray: [],
    },
    reducers: {},
    extraReducers: {
        [getRatesForRoom.pending]: (state, action) => {
            state.loading = true;

        },
        [getRatesForRoom.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.rateArray = payload;
        },
        [deleteDanhGia.pending]: (state, {payload}) => {
            state.loading = true;
            
        },
        //  [deleteDanhGia.fulfilled]: (state, {payload}) => {
             
            
        // },


    }
})
export default rateSlice.reducer;