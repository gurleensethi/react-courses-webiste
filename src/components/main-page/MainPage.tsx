import React from "react";
import styles from "./MainPage.module.css";
import { Navigation } from "../common/navigation/Navigation";
import { AboutPage } from "../about-page/AboutPage";
import { HomePage } from "../home-page/HomePage";
import { CoursesPage } from "../course-page/CoursesPage";
import { Route, Switch } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/NotFoundPage";

export const MainPage: React.FunctionComponent = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <div className={styles["navigation"]}>
        <Navigation />
      </div>
    </div>
  );
};
