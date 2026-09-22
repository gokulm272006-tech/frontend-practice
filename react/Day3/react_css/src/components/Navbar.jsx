import "./Navbar.css";
const Navbar=()=> {
  return(<>
      <nav className="navbar">

      <h1 className="logo">My Store</h1>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  
   </>)
}

export default Navbar