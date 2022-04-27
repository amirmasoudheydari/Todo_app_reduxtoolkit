import {
  createSlice,
  nanoid
} from "@reduxjs/toolkit";


const initialState = {
  colorFilter: ['green', 'blue', 'orange', 'red'],
  entities: {
    todos: {}
  }
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      const todo = {
        text: action.payload,
        complete: false,
        color: ''
      }
      state.entities.todos[nanoid(5)] = todo
    },
    CHANGE_COLOR_TODO: (state, action) => {
      const {
        color,
        id
      } = action.payload
      state.entities.todos[id].color = color
    },
    CHANGE_COMPLETE_TODO: (state, action) => {
      const id = action.payload
      state.entities.todos[id].complete = !state.entities.todos[id].complete
    },
    DELETE_TODO: (state, action) => {
      const id = action.payload
      delete state.entities.todos[id]
    },
    MARK_ALL_TODOS: (state) => {
      Object.keys(state.entities.todos).forEach(id => {
        state.entities.todos[id].complete = true
      })
    },
    DELETE_ALL_COMPLETE: (state) => {
      Object.keys(state.entities.todos).forEach(id => {
        state.entities.todos[id].complete = false
      })
    }
  }
})



export default todosSlice.reducer
export const {
  ADD_TODO,
  CHANGE_COLOR_TODO,
  CHANGE_COMPLETE_TODO,
  MARK_ALL_TODOS,
  DELETE_TODO,
  DELETE_ALL_COMPLETE
} = todosSlice.actions

export const selectTodos = state => state.todos.entities.todos