import { useEffect, useContext } from "react";
import { KeycloakContext } from "../KeycloakProvider";
import { getUserByAccessToken, saveUser } from "../services/UserService";

const Login = () => {
  const keycloakContext = useContext(KeycloakContext);

  useEffect(() => {
    if (!keycloakContext) {
      console.error("Keycloak context not found");
      return;
    }

    const { keycloak, token } = keycloakContext;

    keycloak
      .login()
      .then(() => {
        if (token) {
          getUserByAccessToken()
            .then((existingUser) => {
              console.log("User already registered:", existingUser);
            })
            .catch((error) => {
              if (error.response && error.response.status === 404) {
                saveUser()
                  .then(() => {
                    console.log("User registered successfully");
                  })
                  .catch((saveError) => {
                    console.error("Failed to register user:", saveError);
                  });
              } else {
                console.error("Failed to fetch user data:", error);
              }
            });
        }
      })
      .catch((error) => {
        console.error("Keycloak login failed:", error);
      });
  }, [keycloakContext]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Redirecting to login...</h1>
    </div>
  );
};

export default Login;
