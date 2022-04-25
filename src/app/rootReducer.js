import todoSlice from '../features/todos/todoSlice'
import filterSlice from '../features/filters/filterSlice'


const reducer = {
  todos: todoSlice,
  filter: filterSlice
}

export default reducer