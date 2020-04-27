import React, { FunctionComponent } from "react";
import styles from "./TextInput.module.css";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string | undefined;
  onChange: (value: string) => void;
  error?: string;
}

const TextInput: FunctionComponent<Props> = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className={styles.container}>
      <label className={`label`}>{label}</label>
      <div>
        <input
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && (
        <div className={`error-msg`} style={{ marginTop: "8px" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
