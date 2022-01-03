import { createSlice } from '@reduxjs/toolkit'

import state from './state'

const slice = createSlice({
  name: 'user',
  initialState: state,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload
    }
  },
});
export const { setLoginStatus } = slice.actions

export default slice.reducer