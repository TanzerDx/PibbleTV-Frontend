import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/user.type";

const hostname = "http://localhost:8078/user-service";

function saveUser(token: string) {
  return axios
    .post<string>(`${hostname}/register`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

const getUser = async (token: string): Promise<IUser> => {
  const response = await axios.get("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data;

  return {
    uid: data.id,
    username: data.username,
    bgPic: data.background_picture,
    profilePic: data.profile_picture,
    isBanned: data.is_banned,
  };
};

export { saveUser, getUser };
