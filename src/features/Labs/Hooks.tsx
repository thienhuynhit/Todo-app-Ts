import React, { useState, useEffect } from 'react'

export interface HooksProps {}

let run = 0
function calcCount() {
  run = 5
  console.log('calcCount', run)
  return run
}
// lưu ý về initial value useState() trong môi trương dev thì nếu giá trị initial khởi tạo được tính từ 1 hàm thì hàm đó sẽ đc gọi 2 lần còn trên production thì 1 lần
//  để đảm bảo rằng giá trị trường vào ban đầu ko đổi là 1 pure

export default function Hooks(props: HooksProps) {
  // khi ta truyền hàm vào useState phải chứ ý truyền vào 1 callback rồi gọi hàm trong đó hoặc là 1 tên hàm để đảm bảo hàm này chỉ đc gọi 1 lần đầu tiên
  // const [count, setCount] = useState(() => calcCount())
  const [count, setCount] = useState(calcCount)
  const [fullName, setFullName] = useState('Harvey')

  function handelIncrease() {
    // bình thường giá trị của count sẽ tăng sau khi render vì setCount là 1 async function
    // setCount(count + 1)
    // sau mỗi lần set giá trị mới cho state thì sẽ trigger render lại

    // ta nên sử dụng callback để gán giá trị và giá trị sẽ đc thay đổi cập nhật trong quere stack và giữ giá trị
    // nếu cần sử dụng ngay thì ta tự tính toán giá trị newCount và sử dụng
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)

    console.log('Value after setCount', count)
  }
  console.log('after render', count)
  return (
    <div>
      <h1>Hooks component</h1>
      <h2>Use state and use effect</h2>
      <p>Count: {count}</p>
      <button onClick={handelIncrease}>increase +3</button>
      <p>My name is {fullName}</p>
    </div>
  )
}
