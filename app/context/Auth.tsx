"use client";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";
import { auth, provider } from "../config/Config";

export const AuthContext = createContext<
  | {
      user: string;
      name: string;
      error: string;
      isUserLoggedIn: boolean;
      loading: boolean;
      router: string;
    }
  | any
>(undefined);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn]: any = useState(false);
  const [user, setUser]: any = useState(auth?.currentUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadCSVLink, setDownloadCSVLink] = useState("");

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/pages/hospitals");
    } catch (err: any) {
      setLoading((prevState) => !prevState);
      setIsUserLoggedIn(false);
      switch (err.message) {
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/network-request-failed":
          setError("Network request failed, check your network connection");
          break;
        case "auth/popup-closed-by-user":
          setError("You closed the pop-up, try again");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const forgotPasswordHandler = (email: string) => {
    if (email) {
      forgotPassword(email).then(() => {
        router.push("/pages/forget");
      });
    } else if (!email) {
      return alert("Please Input Email First");
    }
  };

  const logOut = async () => {
    if (user) {
      await signOut(auth);
      setIsUserLoggedIn(false);
      setUser(null);
      router.push("/");
    } else {
      router.push("/pages/auth");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/pages/hospitals");
    } catch (err: any) {
      setError(err.message);
      switch (err.message) {
        case "auth/popup-closed-by-user":
          setError("You closed the pop-up, try again");
          break;
        default:
          setError("You closed the pop-up, try again");
          break;
      }
      setIsUserLoggedIn(false);
    }
  };

  const register = async (email: string, password: string) => {
    // e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/pages/hospitals");
    } catch (err: any) {
      setError(err.message);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/weak-password":
          setError("Weak pasword. Password should be at least 6 characters");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/network-request-failed":
          setError("Network request failed, check your network connection");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
      setLoading((prevState) => !prevState);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
        setIsUserLoggedIn(true);
      } else {
        // User is not signed in.
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  const value = {
    router,
    user,
    isUserLoggedIn,
    register,
    login,
    logOut,
    signInWithGoogle,
    error,
    loading,
    setLoading,
    setError,
    setUser,
    downloadCSVLink,
    setDownloadCSVLink,
    forgotPasswordHandler,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
