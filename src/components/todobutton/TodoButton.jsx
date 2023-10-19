import React from "react";

function TodoButton({ value, classname, onclick, type }) {
  return (
    <button type={type} className={classname} onClick={onclick}>
      {value}
    </button>
  );
}

export default TodoButton;
