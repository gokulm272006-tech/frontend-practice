import { useState } from "react"


const EmailSubmit = () => {
    const [email,setEmail]=useState("")

    const handleInput=(e)=>{
        setEmail(e.target.value)
    }
  return (
   <>
   <div><h2>EmailSubmit</h2></div>
    <div>
        <input type="email" placeholder="enter emali" onChange={handleInput}/>
    </div>
   </>
  )
}

export default EmailSubmit