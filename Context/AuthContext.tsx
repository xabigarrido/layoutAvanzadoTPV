import React, { createContext, useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [userOnline, setUserOnline] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserOnline(user);
        setLoadingPage(false);
      } else {
        setUserOnline(false);
        setLoadingPage(false);
      }
    });
  }, []);
  const cerrarSesion = () => {
    try {
      signOut(auth);
      setUserOnline(false);
    } catch (error) {
      console.log("error cerrando sesion", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userOnline,
        setUserOnline,
        loadingPage,
        setLoadingPage,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
