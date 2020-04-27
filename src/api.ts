import { Course } from "src/types";

const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Programming",
    authorId: "1",
    category: "Basics",
  },
  {
    id: "2",
    title: "Build web apps with React",
    authorId: "2",
    category: "Web Development",
  },
];

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function saveCourse(course: Course): Promise<Course> {
  if (course.id) {
    const index = courses.findIndex((c) => c.id === course.id);
    if (index !== -1) {
      courses[index] = { ...courses[index], ...course };
    }
    return courses[index];
  } else {
    const newCourse: Course = {
      id: `${Math.random()}-${Math.random()}-${Math.random()}`,
      ...course,
    };
    courses.push(newCourse);
    return newCourse;
  }
}

export async function getCourseById(
  courseId: string
): Promise<Course | undefined> {
  const course = courses.find((c) => c.id === courseId);
  return course;
}

export async function deleteCourse(courseId: string) {
  const index = courses.findIndex((c) => c.id === courseId);
  if (index !== -1) {
    courses.splice(index, 1);
  }
}
