import React, { useState } from "react";
import { register } from "../services/AuthenticationService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToConfirm, setPasswordToConfirm] = useState("");

  const defaultProfilePic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const defaultBackgroundPic =
    "https://img.goodfon.com/wallpaper/big/0/af/minimalizm-gory-tekstura-cherno-beloe-chernoe.webp";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordToConfirm) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const token = await register(
        username,
        email,
        password,
        defaultBackgroundPic,
        defaultProfilePic
      );

      console.log("User registered successfully ");
      localStorage.setItem("access_token", token);

      window.location.href = "/profile";
    } catch (error) {
      console.log("Error registering the user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Confirm Password</label>
          <input
            type="password"
            value={passwordToConfirm}
            onChange={(e) => setPasswordToConfirm(e.target.value)}
            className="w-full px-3 py-2 border rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-defaultBtn text-white py-2 rounded hover:bg-defaultBtnHover"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
