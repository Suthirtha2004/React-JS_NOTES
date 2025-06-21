import { NavLink } from "react-router"

export const Header =() =>{
    return(
    <>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <NavLink href="#">CodingLab.</NavLink>
          </div>
          <ul className="nav-links">
            <li><NavLink href="#">Home</NavLink></li>
            <li><NavLink href="#">About</NavLink></li>
            <li><NavLink href="#">Skills</NavLink></li>
            <li><NavLink href="#">Services</NavLink></li>
            <li><NavLink href="#">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
    ) 
}