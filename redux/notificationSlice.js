import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    alerts_sos_notifications: 0
  }

export const notificationSlice = createSlice({
  name: "notification",
initialState
,
  reducers: {
    setnew_sos_alerts_count: (state,action) => {
        // if(action.payload=="Mas Seguros"){
        //     console.log(action.payload);
        //     state.alerts_sos_notifications +=1;
        //     console.log(state.alerts_sos_notifications);

        // }
        if(action.payload==0){
            state.alerts_sos_notifications =action.payload;
        }
        else{
            state.alerts_sos_notifications +=1;
        }
        
    },
 
  },
});

const { setnew_sos_alerts_count } = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export { setnew_sos_alerts_count, notificationReducer };