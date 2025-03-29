import { createContext, ReactNode, useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import keycloak from "./keycloak";

interface KeycloakContextType {
  keycloak: Keycloak;
  authenticated: boolean;
  token: string | undefined;
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
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (keycloak.didInitialize) return;

    keycloak
      .init({
        onLoad: "check-sso",
      })
      .then((auth) => {
        setAuthenticated(auth);
        setInitialized(true);

        if (auth) {
          setToken(keycloak.token);

          setInterval(() => {
            keycloak
              .updateToken(70)
              .then((refreshed) => {
                if (refreshed) {
                  setToken(keycloak.token);
                }
              })
              .catch(() => keycloak.logout());
          }, 60000);
        }
      })
      .catch((error) => {
        console.error("Keycloak initialization failed:", error);
        setAuthenticated(false);
        setInitialized(true);
      });
  }, []);

  if (!initialized) return <div>Loading...</div>;

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, token }}>
      {children}
    </KeycloakContext.Provider>
  );
};
