// components/Navbar.
import styles from './layout.module.css'
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} "styles.bg-base-100"`}>
      <div className="flex-1">
        <Link className="btn" href="https://alanabarrettfrew.com">My Website</Link>
      </div>
     
    </div>
  );
};
export default Navbar;