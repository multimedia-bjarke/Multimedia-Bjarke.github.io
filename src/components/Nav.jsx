import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <h1>NAV component</h1>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      ;
    </>
  );
}
