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
    setUser({
      uid: "RCpu0bRhAAP8z9QOULS9taHvYSL2",
      email: "demouser@gmail.com",
      emailVerified: true,
      displayName: "Demonstration User",
      isAnonymous: false,
      photoURL:
        "https://lh3.googleusercontent.com/a/ACg8ocLpZXq8N_iy2xlcwVrYjouBcHiIXmjyS-1pU4CjSCyHcwtD=s96-c",

      createdAt: "1708318439897",
      lastLoginAt: "1708905100663",
    });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, [user]);

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
