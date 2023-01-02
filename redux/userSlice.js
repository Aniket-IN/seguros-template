import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setLoggedIn: (state, action) => {
      state.logged_in = action.payload
    },
    update: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.image = action.payload.image
    }
  }
})

const { update, setLoggedIn, setToken } = userSlice.actions
const userReducer = userSlice.reducer

export { update, setLoggedIn, setToken, userReducer }