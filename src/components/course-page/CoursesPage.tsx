import React from "react";
import styles from "./CoursesPage.module.css";
import { Course } from "src/types";
import { getCourses } from "src/api";
import { CourseList } from "../common/course-list/CourseList";

export const CoursesPage: React.FunctionComponent = (props) => {
  const [courses, setCoruses] = React.useState<Course[]>([]);
  React.useEffect(() => {
    getCourses().then((data) => {
      setCoruses(data);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <ul className={styles["course-list"]}>
        <CourseList courses={courses} />
      </ul>
    </div>
  );
};
