import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseForm from "../course-form/CourseForm";
import { Course } from "src/types";

export const ManageCoursePage: React.FunctionComponent<RouteComponentProps> = () => {
  const [course, setCourse] = React.useState<Partial<Course>>({
    category: "",
    title: "",
    authorId: "",
  });

  const handleDataChange = (key: keyof Course, value: any) => {
    setCourse({ ...course, [key]: value });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} handleDataChange={handleDataChange} />
    </>
  );
};
