import { useState } from "react"
import AgeValidation from "./components/AgeValidation"
import EmailSubmit from "./components/EmailSubmit"


const App = () => {
  const [username, setUserName] = useState("")
  // const [userAge, setUserAge] = useState("")
  const [showData, setshowData] = useState([])

  const handleName = (e) => {
    setUserName(e.target.value)
  }
  // const handleAge = (e) => {
  //   setUserAge(e.target.value)
  // }
  const changeValue = () => {
    // const obj = { name: username, age: userAge }
    // const arr = [...showData]
    // arr.push(obj)
    // setshowData(arr)

    setUserName(" ")
    // setUserAge(" ")

  }
  return (
    <>
    <div><h2>Name</h2></div>
    
    
      <div>
        <input type="text" onChange={handleName} placeholder="name" />
        {/* <input type="number" onChange={handleAge} placeholder="age" /> */}
        <button onClick={changeValue}>click to login</button>
        <p>{showData}</p>
      </div>
      {/* <div>
        <table border={2} cellPadding={2}>
          <thead>
            <tr>
              <th>username</th>
              <th>userage</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((e) => (
              <tr key={e.name}>
                <td>{e.name}</td>
                <td>{e.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <EmailSubmit/>
      <AgeValidation/>

    </>
  )
}

export default App