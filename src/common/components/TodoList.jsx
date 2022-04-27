import TodosListItem from '../components/TodoListItem'
import { useSelector, shallowEqual } from 'react-redux';
import {userColorStatus,userFilterStatus,statusType, optionColor} from '../../features/filters/filterSlice'
import {selectTodos} from '../../features/todos/todoSlice'




export const TodoList = () => {
  const id = useSelector(state => {

    const todos = selectTodos(state)
    const todosId = Object.keys(todos)
    const status = userFilterStatus(state)
    const colors = Object.keys(userColorStatus(state))
    const optionColors = optionColor(state)
    const showAll = status === statusType.ALL
    console.log(colors)

    if(showAll && colors.length === 0){
      return todosId
    }

    const showCompleted = status === statusType.COMPLETED
      
    return todosId.filter(id => {

      const todoColor = todos[id].color[0]?.toUpperCase() + todos[id].color.slice(1)
      const status = showAll || todos[id].complete === showCompleted
      console.log(status)
      const color = colors.length === 0 ||  colors.includes(todoColor)
      return color && status
    })
  },shallowEqual)
  

  return (
    <ul style={{ padding: 0 }}>
      {
        id.map(id => (
          <TodosListItem key={id} id={id} />
        ))
      }
    </ul>
  )
}

