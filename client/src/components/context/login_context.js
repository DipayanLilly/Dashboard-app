import React, { createContext, useState } from "react";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedin, logInHandler, logOutHandler }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
