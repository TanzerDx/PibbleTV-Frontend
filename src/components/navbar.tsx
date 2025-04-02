import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { KeycloakContext } from "../KeycloakProvider";
import SearchBar from "./searchbar.tsx";

const logo = "/icon transparent.png";
const notifs = "/bell-icon.svg";
const settings = "cogwheel.png";

const Navbar: React.FC = () => {
  const keycloakContext = useContext(KeycloakContext);

  if (!keycloakContext) {
    return <div>Error: Keycloak context not found</div>;
  }

  const { authenticated, keycloak } = keycloakContext;

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div className="bg-navbar flex items-center p-0 text-black">
      <img src={logo} alt="Logo" className="h-8% w-4%" />

      <div className="flex ml-5 w-20% justify-between text-lg">
        <NavLink to="/" id="home-link">
          HOME
        </NavLink>
        <NavLink to="/categories" id="categories-link">
          CATEGORIES
        </NavLink>
        <NavLink to="/leaderboard" id="leaderboard-link">
          LEADERBOARD
        </NavLink>
      </div>

      <SearchBar />

      {!authenticated ? (
        <div className="ml-auto mr-5 text-black">
          <NavLink to="/login" id="login-link">
            LOG IN
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-3 items-center w-5% ml-auto mr-2%">
          <img
            src={notifs}
            alt="Notifs"
            className="w-60% hover:cursor-pointer"
          />
          <img
            src={settings}
            onClick={handleLogout}
            alt="Settings"
            className="w-45% hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
