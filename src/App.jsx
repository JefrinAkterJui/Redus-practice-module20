import { useState } from "react";


function App(){
  const [count, setCount]= useState(0);

  const increment =()=>{
    setCount(count+1)
  };

  const asynkIncrement =()=>{
    setTimeout(()=>{
      setCount((prevValue)=> prevValue +1)
    }, 3000)
  }

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={asynkIncrement}>Asunk Increment</button>
    </div>
  )

}

export default App