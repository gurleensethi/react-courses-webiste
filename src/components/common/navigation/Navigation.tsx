import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

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

export const Navigation: React.FunctionComponent = (props) => {
  return (
    <div className={styles["container"]}>
      <nav>
        {navOptions.map((option) => (
          <NavLink
            to={option.path}
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
};
