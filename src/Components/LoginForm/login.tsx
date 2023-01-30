import React from "react";
import "./Login.css";
const Input = ({
  id,
  name,
  values,
  label,
  placeholder,
  onChange,
  type,
  isError,
  errorText,
}: any) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={values}
        onChange={onChange}
      />
      {isError && <div className="error">{errorText}</div>}{" "}
    </div>
  );
};
export default Input;
