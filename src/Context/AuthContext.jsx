import { createContext } from "react";

const Context = createContext();

import { useAuth } from "./hooks/useAuth";

function AuthProvider({ children }) {
  const [isLoading, authenticated, handleLogin, handleLogout] = useAuth();

  return (
    <Context.Provider
      value={{ isLoading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
