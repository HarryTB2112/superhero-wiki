import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <h1 className="logo">SuperHero Wiki</h1>
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
            to="/superheroes"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "rgb(208, 29, 29)" : null };
            }}
          >
            Superheroes
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
