import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

interface AuthProps {
  children: any;
}

export const AuthContext = createContext({
  currentUser: {
    //TODO: à améliorer
    displayName: "",
    email: "",
  },
});

export const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      console.log(user);
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
