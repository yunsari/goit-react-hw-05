import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navbar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navbar = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="movie icon">
          🎬
        </span>{" "}
        <NavLink to="/" className={css.logotext}>
          Movie GoIT
        </NavLink>
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
