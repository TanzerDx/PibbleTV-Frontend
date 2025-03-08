import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Homepage from "./pages/homepage.tsx";
import Categories from "./pages/categories.tsx";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
