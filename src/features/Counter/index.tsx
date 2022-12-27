import { Button, Typography } from '@mui/material'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './counterSlice'
export default function Counter() {
  const dispacth = useDispatch()
  const count = useSelector((state: any) => state.count)
  function handelIncrease() {
    const action = increase(12)
    console.log(action)
    dispacth(action)
  }
  function handelDecrease() {
    const action = decrease()
    dispacth(action)
  }
  return (
    <div>
      <Typography>Result: {count}</Typography>
      <Button onClick={handelIncrease} variant="contained" color="primary">
        Increase
      </Button>
      <Button onClick={handelDecrease} variant="contained" color="secondary">
        Decrease
      </Button>
    </div>
  )
}
