import { useContext, useEffect, useState } from "react";
import { KeycloakContext } from "../KeycloakProvider";
import { getUserByAccessToken } from "../services/UserService";
import { IUser } from "../types/user.type.ts";

const Profile = () => {
  const keycloakContext = useContext(KeycloakContext);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!keycloakContext?.token) {
      console.error("No token found");
      return;
    }

    getUserByAccessToken()
      .then((userData: IUser) => {
        setUser(userData);
      })
      .catch((error: Error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, [keycloakContext?.token]);

  return user ? (
    <div>
      <div>
        <img
          className="w-full h-[30vh] object-cover"
          src={user.bgPic}
          alt="Background"
        />
      </div>

      <div className="flex p-10">
        <div className="w-10%">
          <img
            className="w-full rounded-full"
            src={user.profilePic}
            alt="ProfilePic"
          />
        </div>

        <div className="flex flex-row items-center ml-2%">
          <div>
            <h1 className="text-3xl font-bold">{user.username}</h1>
          </div>
          <div className="flex flex-col ml-2%">
            <h1 className="text-3xl">0 followers </h1>
            <h1 className="text-3xl">0 following</h1>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
    </div>
  );
};

export default Profile;
