import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img
          src="https://pbs.twimg.com/profile_images/1343955041233862663/j8tk9I-I_400x400.jpg"
          alt="logo"
        />
      </Link>
      <div>
        <Link href="/hello">Podcasts</Link>
      </div>
      <div>
        <Link href="/">Schedule</Link>
      </div>
      <div>
        <Link href="/">About Us</Link>
      </div>
      <div>
        <Link href="/">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
