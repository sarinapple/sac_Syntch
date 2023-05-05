import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    // Q IS WHAT IS HAPPNEING HERE DESTRUCTURING INSIDE OF AN OBJECT?
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
