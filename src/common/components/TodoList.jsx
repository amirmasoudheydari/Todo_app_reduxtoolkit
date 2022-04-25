import TodosListItem from '../components/TodoListItem'
import { useSelector, shallowEqual } from 'react-redux';


export const TodoList = () => {
  const id = useSelector(state => Object.keys(state.todos.entities.todos), shallowEqual)

  return (
    <ul style={{ padding: 0 }}>
      {console.log(id)}
      {
        id.map(id => (
          <TodosListItem key={id} id={id} />
        ))
      }
    </ul>
  )
}

