import React from "react";
import styles from "./Navigation.module.css";

export const Navigation: React.FunctionComponent = (props) => {
  return (
    <nav className={styles["container"]}>
      <ul>
        <li>
          <a
            href="/"
            className={
              window.location.pathname === "/" ? styles["selected"] : ""
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={
              window.location.pathname === "/about" ? styles["selected"] : ""
            }
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
