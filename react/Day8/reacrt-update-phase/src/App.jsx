import { useState } from "react"
import String from "./Components/String"
import Hide from "./Components/Hide"


const App = () => {


  const[count,setCount]=useState(0)

   const handleCount=()=>{
    setCount(count+1)

    }
    const handleSub=()=>{
    setCount(count-1)

    }
    const handleReset=()=>{
    setCount(0)

    }

  return (
    <>
   <String/>
   <Hide/>

    <div>
      <button onClick={handleCount}>add</button>
      <button onClick={handleSub}>subract</button>
      <button onClick={handleReset}>reset</button>
    </div>
    <div>
      <p>{count}</p>
    </div>
    
    </>
  )
}

export default App