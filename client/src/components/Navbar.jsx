import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

import "../App.css";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between px-5 py-5"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <h1 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
        <code>&lt; /&gt; </code>
        Its_Srishtiii
      </h1>
      <nav className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" className="nav-link">
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className="nav-link">
              Experience
            </NavLink>
          </li>
          <ThemeToggler />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
