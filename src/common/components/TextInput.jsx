import { FormControl, Input, InputBase } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


import {ADD_TODO} from '../../features/todos/todoSlice'

export const TextInput = ({palaceholder}) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()


  const handelKeyDown = (e) => {
    if(e.keyCode === 13 && value.length > 3) {
      dispatch(ADD_TODO(value))
      setValue('')
    }
  }

  const handelChange = (e) => {
      setValue(e.target.value)
  }


  return (
    <Box
      height={50}
      sx={{
        'div': {
          height:'100%',
          pl: "70px",
          pr:2
        }
      }}
    >
      <InputBase
        onKeyDown={handelKeyDown}
        onChange={handelChange}
        placeholder={palaceholder}
        fullWidth
        size='medium'
        value={value}
        sx={{fontSize:'1.5rem'}}
      />

    </Box>
  )
}

