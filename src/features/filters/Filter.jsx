import { Box, Button, Checkbox, Grid, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import {CHANGE_COLOR_STATUS,filterColors} from './filterSlice'
import {MARK_ALL_TODOS, DELETE_ALL_COMPLETE,selectTodos} from '../todos/todoSlice'
import FilterStatus from '../../common/components/FilterStatus'


const Filter = () => {
  const dispatch = useDispatch()

  const filterColor = useSelector(state => filterColors(state))
  const rememingTodo = useSelector( state => {
    const todos = selectTodos(state)
    const activeTodos = Object.keys(todos).filter(id => todos[id].complete === false)
    return activeTodos.length
  })


  const handelChangeColor = (e,color) => {
    dispatch(CHANGE_COLOR_STATUS({check:e.target.checked,color}))
  }

  const handelMarkAll = () => {
    dispatch(MARK_ALL_TODOS())
  }

  const handelDeleteComplete = () => {
    dispatch(DELETE_ALL_COMPLETE())
  }

  return (
    <Box minHeight={200}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20
            }}
            variant='h5'>Actions</Typography>
          <Stack mt={2} spacing={2} alignItems='center'>
            <Button onClick={handelMarkAll} variant='contained'>Mark all complete</Button>
            <Button onClick={handelDeleteComplete} variant='contained'>clear complete</Button>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20
            }}
            variant='h5'>Remining Todos</Typography>
          <Stack mt={2} spacing={2} alignItems='center'>
            <Typography variant='body1' >
              {/* {rememingTodo} */}
            </Typography>
          </Stack>
        </Grid>
        
        <FilterStatus />

        <Grid item xs={6} md={3}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20
            }}
            variant='h5'>Filter By Color</Typography>
          <Stack mt={2} spacing={1} alignItems='center'>
            {filterColor.map(color => (
              <Stack key={color} flexDirection='row' alignItems='center'>
                <Checkbox onClick={(e) => handelChangeColor(e,color)} />
                <Box sx={{ width: '30px', height: '18px', bgcolor: color.toLowerCase() }}></Box>
                <Typography fontWeight={600} ml={1} variant='body1'>{color}</Typography>
              </Stack>
            ))}

          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Filter