import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Providers = { google: new GoogleAuthProvider() };
