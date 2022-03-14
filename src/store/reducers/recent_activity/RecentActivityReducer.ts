import { createSlice } from '@reduxjs/toolkit'

interface IRecentActivityState {
  searchInput: string | null
}

const initialState: IRecentActivityState = {
  searchInput: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addSearchInput: (state: IRecentActivityState, action: any) => {
      state.searchInput = action.payload ?
        action.payload : initialState.searchInput
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSearchInput } = appSlice.actions

export default appSlice.reducer