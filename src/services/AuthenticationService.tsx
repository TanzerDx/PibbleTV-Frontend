import axios, { AxiosResponse } from "axios";

const hostname = "http://localhost:8079";

function login(email: string, password: string): Promise<string> {
  return axios
    .post<string>(`${hostname}/auth/login`, { email, password })
    .then((response: AxiosResponse<string>) => response.data);
}

export default login;
