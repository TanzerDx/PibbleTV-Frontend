import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.tsx";
import Homepage from "./pages/homepage.tsx";
import Categories from "./pages/categories.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { KeycloakProvider } from "./KeycloakProvider.tsx";

const App: React.FC = () => {
  return (
    <KeycloakProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
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
    </KeycloakProvider>
  );
};

export default App;
