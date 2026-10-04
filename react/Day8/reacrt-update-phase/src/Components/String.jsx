import { useState } from "react"


const String = () => {
    const [show,setShow]=useState("Hello React ")
    const handleChange=(e)=>{
        setShow('welcome to react')
    }
  return (
    <>
    <button onClick={handleChange}>show</button>
    <p>{show}</p>
    </>
  )
}

export default String