import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { auth, provider } from "../services/firebase";

interface AuthGoogleContextType {
  user: any;
  signInGoogle: () => void;
}

export const AuthGoogleContext = createContext<AuthGoogleContextType>({
  user: null,
  signInGoogle: () => {},
});

interface AuthGoogleProviderProps {
  children: ReactNode;
}

export const AuthGoogleProvider = ({ children }: AuthGoogleProviderProps) => {
  const [user, setUser] = useState(null);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage, credential);
      });
  };

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
