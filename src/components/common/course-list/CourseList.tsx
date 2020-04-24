import React from "react";
import styles from "./CourseList.module.css";
import { Course } from "src/types";

interface Props {
  courses: Course[];
}

export const CourseList: React.FunctionComponent<Props> = ({ courses }) => {
  return (
    <ul className={styles["course-list"]}>
      {courses.map((course) => (
        <li key={course.authorId} className="card card-hover">
          <h3 className={styles.heading}>{course.title}</h3>
          <div className={styles.title}>Category</div>
          <div className={styles["content-title"]}>{course.category}</div>
        </li>
      ))}
    </ul>
  );
};
