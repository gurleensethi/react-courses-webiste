import { Course } from "src/types";

export async function getCourses(): Promise<Course[]> {
  return [
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
}
