import dispatcher from "../app-dispatcher/app-dispatcher";
import { Course } from "src/types";
import * as api from "../../api";
import actionsTypes from "./actions-types";

export const saveCourse = (course: Course) => {
  api.saveCourse(course).then(() => {
    dispatcher.dispatch({
      type: actionsTypes.CREATE_COURSE,
      payload: course,
    });
  });
};
