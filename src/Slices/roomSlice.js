import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { history } from "../App";
import roomAPI from "../Services/roomAPI";


export const getRoomList = createAsyncThunk("room/getRoomList",async(locationId)=>{
    try{
        const data = await roomAPI.getRoomList(locationId)
     
        return data
    }catch(e){
        console.log(e);
    }
})
export const getRoomDetails = createAsyncThunk("room/getRoomDetails",async(roomId)=>{
try{
    const data = await roomAPI.getRoomDetails(roomId)
   
    return data
}catch(e){
    console.log(e);
}
})
export const postDatPhong = createAsyncThunk("room/postDatPhong",async(thongTinPhongDat)=>{
    
    try{
        const data = await roomAPI.postDatPhong(thongTinPhongDat)
        
        return data
    }catch(e){
        console.log(e);
    }
})
export const postTaoPHong = createAsyncThunk("room/postTaoPHong",async(thongTinTaoPhong)=>{
   
const data = await roomAPI.postTaoPhong(thongTinTaoPhong)
alert('Tạo phòng thành công')
history.goBack()

})
export const postAnhPhong = createAsyncThunk('room/postAnhPhong',async(thongTinAnh,{dispatch})=>{
    
    try{
        const data = await roomAPI.postAnhPhong(thongTinAnh)
    alert('Cập nhập ảnh thành công')
    dispatch(getRoomList(thongTinAnh.locationId))
    }catch(e){
        console.log(e)
    }
})
export const putCapNhapPhong = createAsyncThunk('room/putCapNhapPhong',async(thongTinCapNhap,{dispatch})=>{
    const data = await roomAPI.putCapNhapPhong(thongTinCapNhap)
    alert('Cập nhập thành công')
    history.goBack()
})
export const deletePhong = createAsyncThunk('room/deletePhong',async(thongTinXoa,{dispatch})=>{
            const data = await roomAPI.deletePhong(thongTinXoa.roomId)
            dispatch(getRoomList(thongTinXoa.locationId))
            
})
const roomSlice = createSlice({
    name: "room",
    initialState: {
        loading: false,
        error: null,
        roomArray : [],
        roomDetails : {},
        isSuccessTicket : false,
    },
    reducers:{
        handleModal : (state,{payload})=>{
            state.isSuccessTicket = false
            
           

        }
    },
    extraReducers:{
        [getRoomList.pending]:(state,action)=>{
            state.loading = true;
        },
        [getRoomList.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.roomArray = payload;
        },
        [getRoomDetails.pending]:(state,action)=>{
            state.loading = true;
        },
        [getRoomDetails.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.roomDetails = payload;
            
        },
        [postDatPhong.pending]:(state,action)=>{
            state.loading = true;
        },
        [postDatPhong.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.isSuccessTicket = true;
        }


    }
})

export default roomSlice.reducer;
export const {handleModal} = roomSlice.actions;