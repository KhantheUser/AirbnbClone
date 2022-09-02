import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import ticketAPI from "../Services/ticketAPI";


export const getTicketsByUser = createAsyncThunk("ticket/getTicketsByUser",async(userId)=>{
    try{
        const data = await ticketAPI.getTicketsByUser(userId)
        
        return data
    }catch(e){
        console.log(e);
    }
})
const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        loading: false,
        error: null,
        ticketArray : [],

    },
    reducers:{},
    extraReducers:{
        [getTicketsByUser.pending]:(state,{payload})=>{
            state.loading = true;
        },
        [getTicketsByUser.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.ticketArray = payload;
        }
    }
})

export default ticketSlice.reducer;