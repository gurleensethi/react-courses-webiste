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

  getCourseById(id: string): Course | undefined {
    return this.courses.find((c) => c.id === id);
  }

  private registerWithDispatcher() {
    dispatcher.register((action: any) => {
      switch (action.type) {
        case actionsTypes.CREATE_COURSE: {
          this.courses.push(action.payload);
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
