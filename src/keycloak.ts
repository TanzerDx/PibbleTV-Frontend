import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "pibble-tv",
  clientId: "pibble-tv-backend",
});

export default keycloak;
