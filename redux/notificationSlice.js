import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    alerts_sos_notifications: 0
  },
  reducers: {
    setnew_sos_alerts_count: (state, action) => {
        if(action.payload=="Mas Seguros"){
            console.log(state, action.payload);
            state.alerts_sos_notifications =+1;

        }
    },
 
  },
});

const { setnew_sos_alerts_count } = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export { setnew_sos_alerts_count, notificationReducer };