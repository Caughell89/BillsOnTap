import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Schedule | Bills on Tap!</title>
          <meta name="description" content="Generated by Garrity Inc." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Buffalo Bills Schedule 2021</h1>
          <div className={styles.schedule}>
            <div className={styles.game}>
              <div className={styles.away}>Pittsburg Steelers</div>
              <div className={styles.home}>Buffalo Bills</div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="http://www.espn.com">Powered by Deeds Media Inc.</a>
        </footer>
      </div>
    </>
  );
}
