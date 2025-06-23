import { NavLink } from "react-router-dom";

export const Header = () => {

  const getLinkStyleChange =({isActive})=>{
    return{
      color : isActive? "green" : "red" 
    };
  }
  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <NavLink to="/" className="nav-link">CodingLab.</NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={getLinkStyleChange}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "green" : "red"
                  };
                }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};