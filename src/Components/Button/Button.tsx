import React from "react";
import "./Button.css";
type buttonProps = {
  handleclick: () => void;
  name: string;
  class: string;
};
export const Button = (props: buttonProps) => {
  return (
    <button
      onClick={() => props.handleclick()}
      className={props.class}
    >
      {props.name}
    </button>
  );
};




