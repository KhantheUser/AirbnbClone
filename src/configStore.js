import { configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit";
import position from './Slices/positionSlice'
import room from "./Slices/roomSlice";
import rate from "./Slices/rateSlice"
import user from './Slices/userAuthSlice'
import ticket from './Slices/ticketSlice'

import userManage from './Slices/userManage'
const store = configureStore({
    reducer: {
        position: position,
        room : room,
        rate : rate,
        user : user,
        ticket : ticket,
        userManage : userManage

    },
     middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
    
})
export default store