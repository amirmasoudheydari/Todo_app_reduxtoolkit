import {CssBaseline } from '@mui/material'


import {Header} from '../common/components'
import Todos from '../features/todos/Todos'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header content='Redux Fundamentals Example' />
      <Todos />
    </>
  )
}

export default App