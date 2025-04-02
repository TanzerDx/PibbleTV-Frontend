import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Navbar from "./components/navbar.tsx";
import { KeycloakContext } from "./KeycloakProvider.tsx";
import Homepage from "./pages/homepage.tsx";
import Categories from "./pages/categories.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Stream from "./pages/stream.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stream" element={<Stream />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
