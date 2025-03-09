import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" className="navbar_link">
          <img
            alt="logo"
            className="navbar_logo"
            src="https://cdn-icons-png.flaticon.com/512/565/565871.png"
          />
        </NavLink>
        <h1>ArtGalleryManager</h1>
      </nav>
    </header>
  );
};

export default Navbar;
