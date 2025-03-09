import { useEffect } from "react";
import { auth, db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

interface User {
  uid: string;
  username: string;
  email: string;
  profilePic: string;
}

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    profilePic: "",
  });

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data() as User);
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in!");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    await auth.signOut();
    window.location.href = "/homepage";
  }

  return userDetails ? (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-lg">Username: {userDetails.username}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
    </div>
  );
};

export default Profile;
