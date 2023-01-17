import styles from "../styles/Nav.module.sass";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={currentRoute === "/" ? styles.active : styles.nonActive}
          >
            OSA
          </Link>

          <Link
            href="info"
            className={
              currentRoute === "/info" ? styles.active : styles.nonActive
            }
          >
            Information
          </Link>
        </nav>
      </header>
    </>
  );
}
