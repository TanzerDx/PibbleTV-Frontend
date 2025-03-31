import { ReactNode, useContext } from "react";
import { KeycloakContext } from "./KeycloakProvider";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const context = useContext(KeycloakContext);

  if (!context?.authenticated) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
