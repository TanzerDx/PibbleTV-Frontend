import { NavLink } from "react-router-dom";

const logo = "/icon transparent.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <div className="navbar-item">
        <NavLink to="/" id="homepage-link" className="navbar-item-text">
          HOMEPAGE
        </NavLink>
      </div>

      <div className="navbar-item">
        <NavLink
          data-testid="cypress-goToConcerts-button"
          to="/concerts"
          id="concerts-link"
          className="navbar-item-text"
        >
          CONCERTS
        </NavLink>
      </div>

      <div className="navbar-item">
        <NavLink to="/aboutUs" id="aboutUs-link" className="navbar-item-text">
          ABOUT US
        </NavLink>
      </div>
      {/* 
      <SearchBar /> */}

      <div className="navbar-signin">
        <NavLink to="/signin" id="signin-link" className="navbar-item-text">
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
