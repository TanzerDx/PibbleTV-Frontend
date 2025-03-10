import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar.tsx";
import Homepage from "./pages/homepage.tsx";
import Categories from "./pages/categories.tsx";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";
import { useEffect, useState } from "react";
import { auth } from "../firebase.js";

interface User {
  uid: string;
  username: string;
  email: string;
  profilePic: string;
}

const App: React.FC = () => {
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

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/profile" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/profile" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
