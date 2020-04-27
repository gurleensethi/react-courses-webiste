import dispatcher from "../app-dispatcher/app-dispatcher";
import { Course } from "src/types";
import * as api from "../../api";
import actionsTypes from "./actions-types";

export const saveCourse = async (course: Course) => {
  const savedCourse = await api.saveCourse(course);
  dispatcher.dispatch({
    type: !!course.id ? actionsTypes.UPDATE_COURSE : actionsTypes.CREATE_COURSE,
    payload: savedCourse,
  });
};

export const loadCourses = () => {
  api.getCourses().then((courses) => {
    dispatcher.dispatch({
      type: actionsTypes.LOAD_COURSES,
      payload: courses,
    });
  });
};

export const deleteCourse = (courseId: string) => {
  api.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      type: actionsTypes.DELETE_COURSE,
      payload: courseId,
    });
  });
};
