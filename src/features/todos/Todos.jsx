import {  Container, Typography } from '@mui/material'
import { Box } from '@mui/system'


import { TextInput, TodoList } from '../../common/components'
import Filter from '../filters/Filter'

const Todos = () => {
  return (
    <>
      <Box>
        <Typography
          fontWeight="400"
          variant="h2"
          color="rgb(255, 31, 40)"
          textAlign="center"
          pt={1}
        >
          Todos
        </Typography>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          boxShadow: 2,
          mt: 4,
          mb:15,
          bgcolor: '#fff',
          px: '0 !important'
        }}
      >

        <TextInput palaceholder='whats needs to be done?' />
        <TodoList />
        <Filter />
      </Container>
    </>
  )
}

export default Todos