import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
  authDomain: "auth-8b1ef.firebaseapp.com",
  projectId: "auth-8b1ef",
  storageBucket: "auth-8b1ef.appspot.com",
  messagingSenderId: "445273762769",
  appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
};

const app = initializeApp(config);

export const auth = getAuth(app);
