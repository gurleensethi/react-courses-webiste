import React from "react";
import styles from "./CoursesPage.module.css";
import { Course } from "src/types";
import { CourseList } from "../common/course-list/CourseList";
import { Link, RouteComponentProps } from "react-router-dom";
import courseStore from "../../data/stores/course-store";
import { deleteCourse } from "src/data/actions/course-actions";

export const CoursesPage: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  const [courses, setCoruses] = React.useState<Course[]>(
    courseStore.getCourses()
  );

  const onChange = () => {
    setCoruses(courseStore.getCourses());
  };

  React.useEffect(() => {
    courseStore.addChangeListener(onChange);
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  return (
    <div className={styles["container"]}>
      <Link to={"/home/course"} className={`btn ${styles["add-course-btn"]}`}>
        Add Course
      </Link>
      <CourseList
        courses={courses}
        deleteCourse={(course) => deleteCourse(course.id)}
      />
    </div>
  );
};
