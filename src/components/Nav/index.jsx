import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <h1 className="logo">Pokemon Wiki</h1>
        <ul className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "rgb(208, 29, 29)" : null };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemon"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "rgb(208, 29, 29)" : null };
            }}
          >
            Pokedex
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
