import { NavLink } from 'react-router-dom'


const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <h2>NEZZI'S</h2>
        </div>

        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/HomePage">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage">About</NavLink>
            </li>
            <li>
              <NavLink to="/ContactPage">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;