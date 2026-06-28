import { useState } from 'react'

function App() {
  

  const Counter = ({initCount}) => {
    const [count, setCount] = useState(initCount)
    return (
      <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
    )
  }

  return (
    <>
      <h1>Counter</h1>
      <Counter initCount={12}/>
    </>
  )
}

export default App
