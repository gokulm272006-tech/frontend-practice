import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'
import Service from './pages/Service.jsx'
import Courses from './pages/Courses.jsx'
import Gallary from './pages/Gallary.jsx'
  

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Gallary" element={<Gallary/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Help" element={<Help/>}/>
      </Routes>
    </>
  )
}

export default App