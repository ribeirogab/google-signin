import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!credential) {
      throw new Error("Credential is missing");
    }

    const token = credential.idToken;

    console.log("token", token);
  } catch (error) {
    console.log(error);
  }
};
