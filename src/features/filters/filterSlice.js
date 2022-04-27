import { createSlice } from "@reduxjs/toolkit";

export const statusType = {
  ALL: 'All',
  ACTIVE:'Active',
  COMPLETED: 'Completed'
}


const initialState = {
  filterStatus: ['All', 'Active', 'Completed'],
  filterColor: ['Green', 'Blue', 'Orange', 'red'],
  entities:{
    filterStatus: statusType.ALL,
    filtredColor: {}
  }
}


const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers:{
    CHANGE_FILTER_STATUS: (state,action) => {
      const filter = action.payload
      state.entities.filterStatus = filter
    },
    CHANGE_COLOR_STATUS: (state,action) => {
      const {check, color} = action.payload
      if(check){
        state.entities.filtredColor[color] = color
      }else{
        delete state.entities.filtredColor[color]
      }
    }
  }
})

export default filterSlice.reducer
export const {
  CHANGE_FILTER_STATUS,
  CHANGE_COLOR_STATUS
} = filterSlice.actions

export const filterColors = state => state.filter.filterColor
export const userFilterStatus = state => state.filter.entities.filterStatus
export const userColorStatus = state => state.filter.entities.filtredColor
export const optionColor = state => state.filter.filterColor