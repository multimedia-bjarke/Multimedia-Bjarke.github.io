import { NavLink } from "react-router-dom";
import HomePage from "../pages/Home";

export default function Nav() {
  console.log("nav component works!");
  return (
    <>
      <nav>
        <NavLink to="/" element={<HomePage />}>
          Home{" "}
        </NavLink>
        <NavLink to="/projects">Projects </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/contact">Contact </NavLink>
      </nav>
    </>
  );
}
