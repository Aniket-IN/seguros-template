import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "Lucas Rodriguez",
    email: "ejemplo@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state = action.payload
    }
  }
})

const { update } = userSlice.actions
const userReducer = userSlice.reducer

export { update, userReducer }