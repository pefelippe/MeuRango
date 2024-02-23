import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth, provider } from "../lib/firebase";

interface AuthGoogleContextType {
  user: any;
  signInGoogle: () => void;
  logOut: () => void;
  setDemonstrationUser: () => void;
}

export const AuthGoogleContext = createContext<AuthGoogleContextType>({
  user: null,
  signInGoogle: () => {},
  logOut: () => {},
  setDemonstrationUser: () => {},
});

interface AuthGoogleProviderProps {
  children: ReactNode;
}

export const AuthGoogleProvider = ({ children }: AuthGoogleProviderProps) => {
  const [user, setUser] = useState<any | null>(null);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage, credential);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  const setDemonstrationUser = () => {
    setUser({});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, user, logOut, setDemonstrationUser }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthGoogleContext);
};
