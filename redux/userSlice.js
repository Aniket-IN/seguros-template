import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    update: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.image = action.payload.image
    }
  }
})

const { update } = userSlice.actions
const userReducer = userSlice.reducer

export { update, userReducer }