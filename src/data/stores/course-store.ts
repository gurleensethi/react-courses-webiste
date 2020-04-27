import { EventEmitter } from "events";
import dispatcher from "../app-dispatcher/app-dispatcher";
import actionsTypes from "../actions/actions-types";
import { Course } from "src/types";

const CHANGE_EVENT = "change";

class CourseStore {
  private courses: Course[] = [];

  private eventEmitter = new EventEmitter();

  constructor() {
    this.registerWithDispatcher();
  }

  addChangeListener(callback: any) {
    this.eventEmitter.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: any) {
    this.eventEmitter.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.eventEmitter.emit(CHANGE_EVENT);
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string | undefined): Course | undefined {
    return this.courses.find((c) => c.id === id);
  }

  private registerWithDispatcher() {
    dispatcher.register((action: any) => {
      console.log(action);

      switch (action.type) {
        case actionsTypes.CREATE_COURSE: {
          this.courses.push(action.payload);
          courseStore.emitChange();
          break;
        }
        case actionsTypes.LOAD_COURSES: {
          this.courses = action.payload;
          courseStore.emitChange();
          break;
        }
        case actionsTypes.UPDATE_COURSE: {
          this.courses = this.courses.map((course) => {
            if (course.id === action.payload.id) {
              return { ...course, ...action.payload };
            }
            return course;
          });
          courseStore.emitChange();
          break;
        }
        case actionsTypes.DELETE_COURSE: {
          this.courses = this.courses.filter((c) => c.id !== action.payload);
          courseStore.emitChange();
          break;
        }
        default:
          // Nothing here
          break;
      }
    });
  }
}

const courseStore = new CourseStore();
export default courseStore;
