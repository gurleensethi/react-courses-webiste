import React from "react";
import { Course } from "src/types";

interface Props {
  course: Partial<Course>;
  handleDataChange: (id: keyof Course, value: any) => void;
}

const CourseForm: React.FunctionComponent<Props> = ({
  course,
  handleDataChange,
}) => {
  const { authorId, category, title } = course;

  return (
    <form>
      <div>
        <label>Title</label>
        <div>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleDataChange("title", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label>Author</label>
        <div>
          <select
            id="author"
            name="authorId"
            value={authorId}
            onChange={(e) => handleDataChange("authorId", e.target.value)}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="1">Scott Allen</option>
          </select>
        </div>
      </div>

      <div>
        <label>Category</label>
        <div>
          <input
            id="category"
            type="text"
            name="category"
            value={category}
            onChange={(e) => handleDataChange("category", e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default CourseForm;
