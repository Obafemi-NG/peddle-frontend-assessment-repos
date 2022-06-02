import React from "react";
import styles from "./Header.module.css";

const Header = ({ fetchRepo }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        MOST STARRED GITHUB REPO <span> (in the last 30days) </span>
      </h4>
      <button onClick={fetchRepo} className={styles.btn}>
        Fetch Repositories
      </button>
    </div>
  );
};

export default Header;
