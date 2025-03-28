import { useEffect } from "react";
import keycloak from "../keycloak";

const Login = () => {
  useEffect(() => {
    keycloak.init({ onLoad: "login-required" }).catch((error) => {
      console.error("Keycloak initialization failed:", error);
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Redirecting to login...</h1>
    </div>
  );
};

export default Login;
