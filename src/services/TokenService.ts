import keycloak from "../keycloak";

function setHeaders(axios: any) {
  const token = keycloak.token;

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export default {
  setHeaders,
};
