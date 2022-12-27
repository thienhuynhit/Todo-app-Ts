import React, { useReducer } from 'react'

export interface LearningHooksProps {}
const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increase':
      return state + 1
      break
    case 'decrease':
      return state - 1
      break
    case 'clear':
      return 0
      break
    default:
      return state
  }
}
export default function LearningHooks(props: LearningHooksProps) {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          dispatch('increase')
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch('decrease')
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch('clear')
        }}
      >
        Clear
      </button>
    </div>
  )
}
