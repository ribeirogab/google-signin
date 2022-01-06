import { GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";

import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!credential) {
      throw new Error("Credential is missing");
    }

    // const idToken = await getIdToken(result.user);
    const { idToken } = credential;

    // console.log("idToken1", idToken1);
    console.log("idToken", idToken);
  } catch (error) {
    console.log(error);
  }
};
