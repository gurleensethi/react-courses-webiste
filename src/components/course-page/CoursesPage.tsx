import React from "react";
import styles from "./CoursesPage.module.css";
import { Course } from "src/types";
import { getCourses } from "src/api";
import { CourseList } from "../common/course-list/CourseList";
import { Link } from "react-router-dom";

export const CoursesPage: React.FunctionComponent = () => {
  const [courses, setCoruses] = React.useState<Course[]>([]);
  React.useEffect(() => {
    getCourses().then((data) => {
      setCoruses(data);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <Link to="/course">Add Course</Link>
      <CourseList courses={courses} />
    </div>
  );
};
