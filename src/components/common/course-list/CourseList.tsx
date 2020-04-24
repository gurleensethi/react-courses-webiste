import React from "react";
import styles from "./CourseList.module.css";
import { Course } from "src/types";
import { Link } from "react-router-dom";
import path from "path";

interface Props {
  courses: Course[];
}

export const CourseList: React.FunctionComponent<Props> = ({ courses }) => {
  return (
    <ul className={styles["course-list"]}>
      {courses.map((course) => (
        <li key={course.authorId} className="card card-hover">
          <Link to={`/courses/${course.id}`}>
            <h3 className={styles.heading}>{course.title}</h3>
          </Link>
          <div className={styles.title}>Category</div>
          <div className={styles["content-title"]}>{course.category}</div>
        </li>
      ))}
    </ul>
  );
};
