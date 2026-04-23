import React, { useRef } from "react";

const UseRef = () => {
  const htmlRef = useRef(null);
  const htmlHandler = () => {
    htmlRef.current.focus();
    htmlRef.current.style.color = "red";
  };

  return (
    <div>
      <input ref={htmlRef} placeholder="Enter the text" />
      <button onClick={htmlHandler}>Focus</button>
    </div>
  );
};

export default UseRef;
