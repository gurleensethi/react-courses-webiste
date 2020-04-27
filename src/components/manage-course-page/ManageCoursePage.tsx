import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CourseForm from "../course-form/CourseForm";
import { Course } from "src/types";
import courseStore from "../../data/stores/course-store";
import { saveCourse } from "src/data/actions/course-actions";

export const ManageCoursePage: React.FunctionComponent<RouteComponentProps<{
  courseId: string | undefined;
}>> = ({ match, history }) => {
  const [course, setCourse] = React.useState<Partial<Course>>({
    category: "",
    title: "",
    authorId: "",
  });

  const [errors, setErrors] = React.useState<
    Partial<{ [key in keyof Course]: string }>
  >({});

  React.useEffect(() => {
    const courseId = match.params.courseId;
    if (courseId) {
      const course = courseStore.getCourseById(courseId);
      if (course) {
        setCourse(course);
      }
    }
  }, [match.params.courseId]);

  const isFormValid = () => {
    const _errors: Partial<{ [key in keyof Course]: string }> = {};

    if (!course.title) {
      _errors.title = "Title is required";
    }
    if (!course.category) {
      _errors.category = "Category is required";
    }
    if (!course.authorId) {
      _errors.authorId = "Author is required";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleDataChange = (key: keyof Course, value: any) => {
    setCourse({ ...course, [key]: value });
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      saveCourse(course as Course);
      history.push("/home/courses");
    }
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        handleDataChange={handleDataChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};
