import React, { FunctionComponent } from "react";

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
    <div>
      <label>{label}</label>
      <div>
        <input
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default TextInput;
