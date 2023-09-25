import { NavLink } from 'react-router-dom'


const navbar = () => {


  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <h2>BRISTO</h2>
        </div>

        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar;