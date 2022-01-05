import type { NextPage } from "next";

import { signInWithGoogle } from "../services/google";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button className={styles.googleButton} onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </main>
    </div>
  );
};

export default Home;
