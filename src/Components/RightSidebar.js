import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { users } from "../DummyData/UserDummyData";

const RightSidebar = () => {
  const { user } = useContext(AuthContext);

  // Updated profile path to match your route
  const getDummyProfilePath = (userId) => `/dummy-profile/${userId}`;

  return (
    <div className="w-80 fixed right-0 top-0 h-screen hidden bg-white lg:block p-6 ">
      <h1>hello world</h1>
      {/* Current User Profile */}
      {user && (
        <div className="flex items-center justify-between mb-6">
          <NavLink 
            to={`/profile/${user.username}`} 
            className="flex items-center gap-4"
          >
            <img
              src={user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
              className="w-8 h-8 rounded-full border"
              alt="Profile"
            />
            <div>
              <p className="font-semibold text-base">{user.username}</p>
              <p className="text-gray-500 text-sm">{user.name}</p>
            </div>
          </NavLink>
          <button className="text-blue-500 text-sm font-semibold">Switch</button>
        </div>
      )}

      {/* Suggested Users */}
      <div className="mb-6 font-poppins font-semibold text-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-semibold text-sm">Suggested for you</span>
          <button className="text-black text-xs font-semibold">See All</button>
        </div>

        <div className="space-y-4">
          {users.map((suggestedUser) => (
            <div key={suggestedUser._id} className="flex items-center justify-between">
              <NavLink 
                to={getDummyProfilePath(suggestedUser._id)} 
                className="flex items-center gap-4"
              >
                <img
                  src={suggestedUser.avatar || "https://via.placeholder.com/150"}
                  className="w-8 h-8 rounded-full border"
                  alt={suggestedUser.username}
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">{suggestedUser.username}</p>
                  <p className="text-gray-500 text-xs">{suggestedUser.name}</p>
                </div>
              </NavLink>
              <button className="text-red-500 rounded-2xl font-semibold p-2 text-sm">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-4 left-6 right-6 text-gray-500 text-xs text-center space-y-2">
        {/* Add footer links here */}
      </div>
    </div>
  );
};

export default RightSidebar;