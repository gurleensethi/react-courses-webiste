import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseForm from "../course-form/CourseForm";
import { Course } from "src/types";
import { saveCourse } from "src/api";

export const ManageCoursePage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const [course, setCourse] = React.useState<Partial<Course>>({
    category: "",
    title: "",
    authorId: "",
  });

  const handleDataChange = (key: keyof Course, value: any) => {
    setCourse({ ...course, [key]: value });
  };

  const handleSubmit = async () => {
    await saveCourse(course as Course);
    history.push("/home/courses");
    setCourse({ category: "", title: "", authorId: "" });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        handleDataChange={handleDataChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
