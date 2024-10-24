import React, { createContext, useState } from "react";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const logInHandler = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedin, userName, logInHandler, logOutHandler }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
