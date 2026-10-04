import { useState } from "react"


const Hide = () => {
    const[show,setShow]=useState(true)
    const toggle=()=>{
        setShow(!show)
    }
  return (
   <>
   <button onClick={toggle}>{show ? "hide":"show"}</button>
    <div></div>
   </>
  )
}

export default Hide