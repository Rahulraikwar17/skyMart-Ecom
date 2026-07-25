import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    toast.success("loggedOut succesfully");
  };

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        logOut,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
