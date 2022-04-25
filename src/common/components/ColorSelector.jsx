import { FormControl, MenuItem, Select } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import {CHANGE_COLOR_TODO} from '../../features/todos/todoSlice'

export const ColorSelector = ({todoId,color}) => {
  color = color ? color : ''
  const dispatch = useDispatch()
  const colorFilter = useSelector(state => state.todos.colorFilter)
  
  


  const handelChange = (e) => {
    dispatch(CHANGE_COLOR_TODO({
      id: todoId,
      color: e.target.value
    }))
  }
  return (
    <FormControl fullWidth size='small' sx={{ m: 1 }} >
      <Select
        sx={{
          color: color,
          fontWeight: 'bold'
        }}
        onChange={handelChange}
        value={color}
      >

        {colorFilter.map(color => (
          <MenuItem key={color} sx={{ color: color }} value={color}>{color}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
  )
}
