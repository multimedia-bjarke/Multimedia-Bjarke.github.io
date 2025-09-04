import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Links">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Contact
      </NavLink>
    </nav>
  );
}
