import Link from "next/link";
import React, { useState } from "react";
import "antd/dist/antd.css";
import styles from "../styles/Navbar.module.css";

import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <img
              src="https://pbs.twimg.com/profile_images/1343955041233862663/j8tk9I-I_400x400.jpg"
              alt="logo"
            />
          </a>
        </Link>
        <div className={styles.webLinks}>
          <Link href="/podcasts">
            <a>Podcasts</a>
          </Link>
        </div>
        <div className={styles.webLinks}>
          <Link href="/schedule">
            <a>Schedule</a>
          </Link>
        </div>
        <div className={styles.webLinks}>
          <Link href="/about_us">
            <a>About Us</a>
          </Link>
        </div>
        <div className={styles.webLinks}>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </div>
        <div className={styles.navToggler} onClick={showDrawer}>
          <MenuOutlined />
        </div>
      </nav>
      <Drawer
        title="Bills on Tap Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Podcasts</p>
        <p>Schedule</p>
        <Link href="/about_us">
          <a>
            <p>About us</p>
          </a>
        </Link>

        <p>Contact us</p>
      </Drawer>
    </>
  );
};

export default Navbar;
