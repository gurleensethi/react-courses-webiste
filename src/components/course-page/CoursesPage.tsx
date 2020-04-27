import React from "react";
import styles from "./CoursesPage.module.css";
import { Course } from "src/types";
import { getCourses } from "src/api";
import { CourseList } from "../common/course-list/CourseList";
import { Link } from "react-router-dom";
import courseStore from "../../data/stores/course-store";

export const CoursesPage: React.FunctionComponent = () => {
  const [courses, setCoruses] = React.useState<Course[]>([]);
  React.useEffect(() => {
    getCourses().then((data) => {
      setCoruses(courseStore.getCourses());
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <Link to="/course">Add Course</Link>
      <CourseList courses={courses} />
    </div>
  );
};
