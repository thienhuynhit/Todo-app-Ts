import React, { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import { v4 } from 'uuid'
import { food, student } from '../../models'

const studentList: student[] = [
  { fullName: 'Harvey Huynh', age: 29, salary: 2000 },
  { fullName: 'Bob', age: 27, salary: 20000 },
]
const foodList: food[] = []

export default function LearnHooks() {
  const [foods, setFoods] = useState(foodList)
  const [students, setStudents] = useImmer(studentList)
  useEffect(() => {
    // we will fetch data
    async function fetchData() {
      const dataFetch = await fetch('http://localhost:8000/api/v1/foodstore')
      const dataJson = await dataFetch.json()
      console.log(dataJson.data)
      console.log('da chay useEffect')
      setFoods(dataJson.data)
      return () => {
        console.log('component unmount')
      }
    }
    fetchData()
  }, [])
  console.log('test strict mode')
  function handleChange() {
    setStudents((draft) => {
      draft[0].fullName = 'Thien Huynh'
      draft[0].age = 30
      draft[0].salary = 1000
    })
  }
  return (
    <div>
      <h1>Learn and Practicing Hooks</h1>
      <h2>Learn How To updating state with obj or arr By using useImmer</h2>
      <div>
        <ul>
          {students.map((student) => (
            <li key={v4()}>
              <p>
                My name is ${student.fullName} and I am ${student.age} years old!! My salary peer month is ${student.salary} USD
              </p>
            </li>
          ))}
        </ul>
        <button onClick={handleChange}>Change</button>
      </div>
      <h1>Learn about useEffect to fetch api</h1>
      <ul>
        {foods.map((item) => (
          <li key={item.id}>
            <span>{`This is ${item.foodName}`}</span>
            <img src={item.thumbnailUrl} alt="food" />
            <span>{item.price} usd</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
