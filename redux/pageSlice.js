import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoaded: (state, action) => {
      state.loaded = action.payload
    },
  }
})

const { setLoaded } = pageSlice.actions
const pageReducer = pageSlice.reducer

export { setLoaded, pageReducer }