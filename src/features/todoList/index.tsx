import * as React from 'react'
import { SearchInPut } from './components/SearchInPut'

export interface TodoListProps {}

export default function TodoList(props: TodoListProps) {
  return (
    <div>
      <SearchInPut></SearchInPut>
    </div>
  )
}
