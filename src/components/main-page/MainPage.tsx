import React from "react";
import styles from "./MainPage.module.css";
import { Navigation } from "../common/navigation/Navigation";
import { AboutPage } from "../about-page/AboutPage";
import { HomePage } from "../home-page/HomePage";

export const MainPage: React.FunctionComponent = (props) => {
  const getPage = () => {
    return window.location.pathname === "/about" ? <AboutPage /> : <HomePage />;
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>{getPage()}</div>
      <div className={styles["navigation"]}>
        <Navigation />
      </div>
    </div>
  );
};
