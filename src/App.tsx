import { useState } from 'react'
import { Body, Footer, Header } from './components'
import Counter from './features/Counter'
import Hooks from './features/Labs/Hooks'
import LearningHooks from './features/Labs/hooks-useReducer'
import LearnHooks from './features/Labs/learn-hooks'
import TodoList from './features/todoList'

function App() {
  const [count, setCount] = useState(0)
  const isLearning = false
  return (
    <div>
      <Header />
      <Body>
        {!isLearning && <TodoList />}
        {/* {!isLearning && <Hooks />} */}
        {/* <LearnHooks /> */}
        {/* <LearningHooks /> */}
        {/* <Counter /> */}
      </Body>
      <Footer />
    </div>
  )
}

export default App
