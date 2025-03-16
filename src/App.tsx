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
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/register"
            element={!isTokenValid ? <Register /> : <Navigate to="/profile" />}
          />
          <Route
            path="/login"
            element={!isTokenValid ? <Login /> : <Navigate to="/profile" />}
          />
          <Route
            path="/profile"
            element={isTokenValid ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
