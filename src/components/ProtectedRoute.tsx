import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { KeycloakContext } from "../KeycloakProvider";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const keycloakContext = useContext(KeycloakContext);

  if (!keycloakContext) {
    return <div>Error: Keycloak context not found</div>;
  }

  const { authenticated } = keycloakContext;

  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
