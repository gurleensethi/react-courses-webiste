import React, { Component } from "react";
import styles from "./CoursesPage.module.css";
import { Course } from "src/types";
import { getCourses } from "src/api";

interface State {
  courses: Course[];
}

export class CoursesPage extends Component<{}, State> {
  state: State = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((data) => {
      this.setState(() => {
        return { courses: data };
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <ul className={styles["course-list"]}>
          {this.state.courses.map((course) => (
            <li key={course.authorId} className="card card-hover">
              <h3 className={styles.heading}>{course.title}</h3>
              <div className={styles.title}>Category</div>
              <div className={styles["content-title"]}>{course.category}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
