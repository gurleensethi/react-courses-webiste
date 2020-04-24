import React from "react";
import styles from "./Navigation.module.css";
import { NavLink, withRouter } from "react-router-dom";
import path from "path";

const navOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
];

export const Navigation = withRouter(({ match }) => {
  return (
    <div className={styles["container"]}>
      <nav>
        {navOptions.map((option) => (
          <NavLink
            to={path.join(match.url, option.path)}
            activeClassName={styles["selected"]}
            key={option.path}
            exact={true}
          >
            {option.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
});
