import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.js";
import { useEffect, useState } from "react";
import SearchBar from "./searchbar.tsx";

const logo = "/icon transparent.png";

interface User {
  uid: string;
  username: string;
  email: string;
  profilePic: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        setUser(user as User);
      } else {
        setUser(null);
      }
    });
  }, []);

  async function handleLogout() {
    await auth.signOut();
    window.location.href = "/";
  }

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

      {!user ? (
        <div className="ml-auto mr-5 text-black">
          <NavLink to="/login" id="login-link">
            LOG IN
          </NavLink>
        </div>
      ) : (
        <div className="ml-auto mr-5 text-black">
          <NavLink to="/" id="logout-link" onClick={handleLogout}>
            LOG OUT
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
