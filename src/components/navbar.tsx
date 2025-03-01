import { NavLink } from "react-router-dom";
import SearchBar from "./searchbar.tsx";

const logo = "/icon transparent.png";

const Navbar: React.FC = () => {
  return (
    <div className="bg-navbar flex items-center p-0 text-black">
      <img src={logo} alt="Logo" className="h-8% w-4%" />

      <div className="flex ml-5 w-20% justify-between text-lg">
        <div>
          <NavLink to="/" id="home-link">
            HOME
          </NavLink>
        </div>

        <div>
          <NavLink to="/categories" id="categories-link">
            CATEGORIES
          </NavLink>
        </div>

        <div>
          <NavLink to="/leaderboard" id="leaderboard-link">
            LEADERBOARD
          </NavLink>
        </div>
      </div>

      <SearchBar />

      <div className="ml-auto mr-5 text-black">
        <NavLink to="/login" id="login-link">
          LOG IN
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
