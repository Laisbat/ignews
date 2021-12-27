import { signIn } from "next-auth/client";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Laís Batista
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}
