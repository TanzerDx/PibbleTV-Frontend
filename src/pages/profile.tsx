import React from "react";

const Profile: React.FC = () => {
  const username = "JohnDoe"; // Replace with dynamic username if needed

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-lg">Username: {username}</p>
      </div>
    </div>
  );
};

export default Profile;
