import{Link} from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <nav className="bg-red-950 flex justify-between align-middle  p-4 text-amber-50">
    <div className="bg ">
        LOGO
        </div>
        <div className="flex gap-5 ">
        <Link to="/" className=" hover:text-amber-300">Home</Link>
        <Link to="/About" className=" hover:text-amber-300">About</Link>
        <Link to="/Service"className="hover:text-amber-300" >Service</Link>
        <Link to="/Courses"className=" hover:text-amber-300" >Courses</Link>
        <Link to="/Gallary"className=" hover:text-amber-300" >Gallary</Link>
        <Link to="/Contact"className=" hover:text-amber-300" >Contact</Link>
        <Link to="/Help" className=" hover:text-amber-300">Help</Link>
        </div>
    
   </nav>
   </>
  )
}

export default Navbar 