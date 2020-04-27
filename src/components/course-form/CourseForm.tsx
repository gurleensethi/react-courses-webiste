import React from "react";
import { Course } from "src/types";
import TextInput from "../common/text-input/TextInput";
import styles from "./CourseForm.module.css";

interface Props {
  course: Partial<Course>;
  handleDataChange: (id: keyof Course, value: any) => void;
  handleSubmit: () => void;
  errors: Partial<{ [key in keyof Course]: string }>;
}

const CourseForm: React.FunctionComponent<Props> = ({
  course,
  handleDataChange,
  handleSubmit,
  errors,
}) => {
  const { authorId, category, title } = course;

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={title}
        error={errors.title}
        onChange={(value) => handleDataChange("title", value)}
      />

      <div>
        <label className={`label`}>Author</label>
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
        {errors.authorId && (
          <div className={`error-msg`} style={{ marginTop: "8px" }}>
            {errors.authorId}
          </div>
        )}
      </div>

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={category}
        error={errors.authorId}
        onChange={(value) => handleDataChange("category", value)}
      />

      <button type="submit" className={`btn`}>
        Save
      </button>
    </form>
  );
};

export default CourseForm;
