import { createContext, ReactNode, useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import keycloak from "./keycloak";

interface KeycloakContextType {
  keycloak: Keycloak;
  authenticated: boolean;
}

interface KeycloakProviderProps {
  children: ReactNode;
}

export const KeycloakContext = createContext<KeycloakContextType | undefined>(
  undefined
);

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (keycloak.didInitialize) return;

    keycloak
      .init({
        onLoad: "check-sso", // Check if the user is logged in without forcing login
      })
      .then((auth) => {
        setAuthenticated(auth);
        setInitialized(true);

        if (auth) {
          setInterval(() => {
            keycloak.updateToken(70).catch(() => keycloak.logout());
          }, 60000);
        }
      })
      .catch((error) => {
        console.error("Keycloak initialization failed:", error);
        setAuthenticated(false); // Treat as unauthenticated
        setInitialized(true); // Ensure the app still loads
      });
  }, []);

  if (!initialized) return <div>Loading...</div>;

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};
