import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_FILTER_STATUS } from '../../features/filters/filterSlice'


const FilterStatus = () => {
  
  const dispatch = useDispatch()
  const filterOption = useSelector(state => state.filter.filterStatus)
  const filterStateus = useSelector(state => state.filter.entities.filterStatus)



  const handelChangeStatus = (e) => {
    dispatch(CHANGE_FILTER_STATUS(e.target.textContent))
  }

  return (
    <Grid item xs={6} md={3}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20
            }}
            variant='h5'>Filter By Stateus</Typography>
          <Stack mt={2} spacing={1} alignItems='center'>
            {filterOption.map(filter => (
              <Box
                onClick={handelChangeStatus}
                key={filter}
                sx={{
                  padding: 1,
                  cursor: 'pointer',
                  borderRadius: 1,
                  border: filterStateus === filter ? '2px solid rgb(218, 194, 202)' : ''
                }}
              >{filter}</Box>
            ))}
          </Stack>
        </Grid>
  )
}

export default FilterStatus