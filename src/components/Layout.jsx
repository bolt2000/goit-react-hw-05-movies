import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <container>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>END</footer>
    </container>
  );
};
