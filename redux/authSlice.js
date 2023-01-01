import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: "Lucas Rodriguez",
      email: "ejemplo@gmail.com",
    },
  },
  reducers: {
    update: (state, action) => {
      state = action.payload
    }
  }
})

const { update } = authSlice.actions
const authReducer = authSlice.reducer

export { update, authReducer }