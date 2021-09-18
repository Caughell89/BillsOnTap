import Head from "next/head";
import Navbar from "../components/Navbar";
import Ribbon from "../components/Ribbon";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import style from "../styles/Schedule.module.css";

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
        <div className={styles.ribbonRow}>
          <Ribbon />

          <main className={styles.mai}>
            <h1 className={styles.title}>Buffalo Bills Schedule 2021</h1>
            <div className={styles.schedule}>
              <div className={style.gameHeaders}>
                <div>
                  <div className={style.bold}>WEEK</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                </div>
                <div>
                  <div className={style.bold}>DATE</div>
                  <div>Sun, Sep 12</div>
                  <div>Sun, Sep 19</div>
                  <div>Sun, Sep 26</div>
                  <div>Sun, Oct 3</div>
                  <div>Sun, Oct 10</div>
                  <div>Mon, Oct 18</div>
                  <div>BYE WEEK</div>
                  <div>Sun, Oct 31</div>
                  <div>Sun, Nov 7</div>
                  <div>Sun, Nov 14</div>
                  <div>Sun, Nov 21</div>
                  <div>Thu, Nov 25</div>
                  <div>Mon, Dec 6</div>
                  <div>Sun, Dec 12</div>
                  <div>Sun, Dec 19</div>
                  <div>Sun, Dec 26</div>
                  <div>Sun, Jan 2</div>
                  <div>Sun, Jan 9</div>
                </div>
                <div>
                  <div className={style.bold}>OPPONENT</div>
                  <div>
                    vs{" "}
                    <img
                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png"
                      alt="team logo"
                    />{" "}
                    Pittsburg
                  </div>
                  <div>
                    @{" "}
                    <img
                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png"
                      alt="team logo"
                    />{" "}
                    Miami
                  </div>
                  <div>vs Washington</div>
                  <div>vs Houston</div>
                  <div>@ Kansas City</div>
                  <div>@ Tennessee</div>
                  <div className={style.holder}>Bye Week</div>
                  <div>vs Miami</div>
                  <div>@ Jacksonville</div>
                  <div>@ New York</div>
                  <div>vs Indianapolis</div>
                  <div>@ New Orleans</div>
                  <div>vs New England</div>
                  <div>@ Tampa Bay</div>
                  <div>vs Carolina</div>
                  <div>@ New England</div>
                  <div>vs Atlanta</div>
                  <div>vs New York</div>
                </div>
                <div>
                  <div className={style.bold}>RESULT</div>
                  <div>
                    <span className={style.loss}>L </span> 23-16
                  </div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>8:20 PM</div>
                  <div>8:15 PM</div>
                  <div className={style.holder}>Bye Week</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>8:20 PM</div>
                  <div>8:15 PM</div>
                  <div>4:25 PM</div>
                  <div>TBD</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                  <div>1:00 PM</div>
                </div>
                <div>
                  <div className={style.bold}>W - L</div>
                  <div>0 - 1</div>
                  <div>FOX</div>
                  <div>FOX</div>
                  <div>CBS</div>
                  <div>NBC</div>
                  <div>ESPN</div>
                  <div className={style.holder}>Bye Week</div>
                  <div>CBS</div>
                  <div>CBS</div>
                  <div>CBS</div>
                  <div>CBS</div>
                  <div>NBC</div>
                  <div>ESPN</div>
                  <div>CBS</div>
                  <div className={style.holder}>TBD</div>
                  <div>CBS</div>
                  <div>FOX</div>
                  <div>CBS</div>
                </div>
                <div>
                  <div className={style.bold}>RICKY</div>
                  <div>
                    <span className={style.loss}>
                      L{" "}
                      <img
                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png"
                        alt="team logo"
                      />{" "}
                    </span>{" "}
                    31-24
                  </div>
                  <div>
                    {" "}
                    <span className={style.holder}>L </span>
                    <img
                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png"
                      alt="team logo"
                    />{" "}
                    34-26
                  </div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                </div>

                <div>
                  <div className={style.bold}>RICKY'S BOY</div>
                  <div>
                    <span className={style.loss}>L </span>
                    <img
                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png"
                      alt="team logo"
                    />{" "}
                    35-28
                  </div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                  <div className={style.holder}>Bye Week</div>
                </div>
              </div>
            </div>
          </main>
          <Ribbon />
        </div>

        <footer className={styles.footer}>
          <a href="http://www.espn.com">Powered by Deeds Media Inc.</a>
        </footer>
      </div>
    </>
  );
}
