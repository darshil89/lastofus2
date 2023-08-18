import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbar_logo} href="/">
        LastOf_us
      </Link>
      <ul className={styles.navbar_links}>
        <li>
          <Link href="/"className={styles.navbar_link}>
           Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navbar_link}>
           About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navbar_link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
