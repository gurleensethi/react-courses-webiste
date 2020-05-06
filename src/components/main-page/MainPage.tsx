import React from "react";
import styles from "./MainPage.module.css";
import { Navigation } from "../common/navigation/Navigation";
import { AboutPage } from "../about-page/AboutPage";
import { HomePage } from "../home-page/HomePage";
import { CoursesPage } from "../course-page/CoursesPage";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import path from "path";
import { ManageCoursePage } from "../manage-course-page/ManageCoursePage";

export const MainPage: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <Switch>
          <Route exact path={match.url} component={HomePage} />
          <Route
            path={path.join(match.url, "courses")}
            component={CoursesPage}
          />
          <Route path={path.join(match.url, "about")} component={AboutPage} />
          <Route
            path={path.join(match.url, "/course/:courseId")}
            component={ManageCoursePage}
          />
          <Route
            path={path.join(match.url, "/course/")}
            component={ManageCoursePage}
          />
        </Switch>
      </div>
      <div className={styles["navigation"]}>
        <Navigation />
      </div>
    </div>
  );
};
