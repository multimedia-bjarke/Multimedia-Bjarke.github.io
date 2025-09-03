import { NavLink } from "react-router-dom";

export default function Nav() {
  console.log("nav component works!");
  return (
    <>
      <nav>
        <NavLink to="/" element="">
          Home
        </NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}
