import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import  { CHANGE_COMPLETE_TODO, DELETE_TODO } from '../../features/todos/todoSlice';
import { ColorSelector } from './'


const TodoListItem = ({id}) => {
  // const [final, setFinal] = useState([])
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todos.entities.todos[id])



  const handelCompleted = (id) => {
    dispatch(CHANGE_COMPLETE_TODO(id))
  }

  const handelDelete = (id) => {
    dispatch(DELETE_TODO(id))
  }

  // const { filterStatus, filtredColor } = useSelector(state => state.filter.entities)


  // useEffect(() => {
  //   if (filterStatus === 'Active') {
  //     const res = selectTodosStatus(false)

  //     if (Object.keys(filtredColor).length) {
  //       const key = selectTodoByColor(res)
  //       return setFinal(key)
  //     }

  //     setFinal(res)
  //   }

  //   const selectTodosStatus = (condition) => {
  //     const res = {}
  //     Object.keys(todos).forEach(id => {
  //       if (todos[id].complete === condition) {
  //         res[id] = todos[id]
  //       }
  //     })
  //     return res
  //   }
  
  
  //   const selectTodoByColor = (res) => {
  //     const key = {}
  //     Object.values(filtredColor).forEach(colorFilter => {
  //       Object.keys(res).forEach(id => {
  //         if (res[id].color === colorFilter.toLowerCase()) {
  //           key[id] = res[id]
  //         }
  //       })
  //     })
  //     return key
  //   }


  //   if (filterStatus === 'Completed') {
  //     const res = selectTodosStatus(true)

  //     if (Object.keys(filtredColor).length) {
  //       const key = selectTodoByColor(res)
  //       return setFinal(key)
  //     }
  //     setFinal(res)
  //   }

  //   if (filterStatus === 'All') {
  //     const res = {}
  //     Object.keys(todos).forEach(id => {
  //       res[id] = todos[id]
  //     })

  //     if (Object.keys(filtredColor).length) {
  //       const key = selectTodoByColor(res)
  //       return setFinal(key)
  //     }
  //     setFinal(res)
  //   }

  // }, [filterStatus, filtredColor, todos])

  return (
    <li key={id} style={{ listStyle: 'none', padding: '0 16px 0 24px', display: 'flex' }}>
      <Box display="flex" onClick={() => handelCompleted(id)} mr="auto" alignItems="center">
        <Box
          sx={{
            width: "35px",
            height: "35px",
            border: "1.3px solid rgba(0,0,0,.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: todo?.complete ? '1' : '0'
          }}
        >
          <DoneIcon color='success' fontSize='medium' />
        </Box>
        <Typography sx={{ cursor: 'pointer' }} mt="0" ml={2} variant="h5">
          {todo?.text}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ColorSelector todoId={id} color={todo?.color} />
        <ClearIcon onClick={() => handelDelete(id)} fontSize='large' sx={{ color: 'red', cursor: 'pointer' }} />
      </Box>
    </li>
  )
}

export default TodoListItem