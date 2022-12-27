import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { ListCard } from './ListCard'
import { task } from '../../../models'
import { Typography } from '@mui/material'
const todoList: task[] = [
  { mainTask: 'Moop the floor', taskStatus: false },
  { mainTask: 'do dusting', taskStatus: false },
  { mainTask: 'do housework', taskStatus: false },
]
let newToDoList: task[] = [...todoList]
const options: string[] = newToDoList.map((op) => op.mainTask)

export function SearchInPut() {
  // control input field
  const [option, setOptions] = React.useState(options)
  const [value, setValue] = React.useState<string | null>()
  const [inputValue, setInputValue] = React.useState('')
  const [todoTasks, setTodoTasks] = React.useState([...todoList])
  // handelAdd
  function handelAdd() {
    !!inputValue && newToDoList.push({ mainTask: inputValue.trim(), taskStatus: 'none' })
    setTodoTasks([...newToDoList])
    setOptions(newToDoList.map((op) => op.mainTask))
  }

  // handleOnClickDelete
  function handleOnClickDelete(idx: number) {
    console.log(todoTasks[idx], 'da duoc xoa')
    const newTodo = todoTasks.filter((item, id) => id !== idx)
    newToDoList = [...newTodo]
    setTodoTasks([...newToDoList])
    setOptions(newToDoList.map((op) => op.mainTask))
  }
  // handleOnClickMarkComplete
  function handleOnClickMarkComplete(idx: number) {
    newToDoList[idx].taskStatus = true
    setTodoTasks([...newToDoList])
    console.log(todoTasks[idx], 'da duoc hoan thanh')
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <Typography sx={{ marginBottom: '20px' }} variant="h3" component="h2">
        Todo-app
      </Typography>

      <Stack spacing={2} direction="row">
        <Autocomplete
          freeSolo
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue)
            console.log('khi nhan enter search')
            console.log(newValue)
            const newTodo = newToDoList.filter((item) => item.mainTask === newValue?.trim())
            !!newValue?.trim() && setTodoTasks([...newTodo])
          }}
          inputValue={inputValue}
          onInputChange={(event: any, newInputValue) => {
            setInputValue(newInputValue)
          }}
          id="controllable-states-demo"
          options={option}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="What do you need to do??..." />}
        />
        <Button variant="contained" color="primary" onClick={handelAdd}>
          Add
        </Button>
      </Stack>
      <ListCard todoList={todoTasks} onClickDelete={handleOnClickDelete} onClickMarkComplete={handleOnClickMarkComplete} />
    </div>
  )
}
