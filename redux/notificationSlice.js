import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alerts_sos_notifications: 0,
  notifications: 0,
  notifications_list:[{title: 'Notifications', body : 'Notifications', date:''}]
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setnew_sos_alerts_count: (state, action) => {
      console.log("notifs payload",action.payload);
      if (action.payload.alertNofis?.title === "New Alert SOS") {
        if (action.payload.alertNofis.count === 0) {
          console.log("before",state.alerts_sos_notifications ,state.notifications)
          state.notifications = state.notifications - state.alerts_sos_notifications;
          state.alerts_sos_notifications = 0;
          console.log("after",state.alerts_sos_notifications ,state.notifications);
        } else {
        
          state.alerts_sos_notifications = state.alerts_sos_notifications+1;
          state.notifications =state.notifications + 1;
        

        }
      }
    },
    setNotificationCount: (state) => {
      state.notifications=0;
      state.alerts_sos_notifications=0;
   
    },
    setNotificationData: (state, action)=>{
      state.notifications_list.push(action.payload);
    }
  },
});

const { setnew_sos_alerts_count,setNotificationCount, setNotificationData } = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export { setnew_sos_alerts_count,setNotificationCount, setNotificationData, notificationReducer };
