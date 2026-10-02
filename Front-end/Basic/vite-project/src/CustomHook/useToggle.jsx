import React, { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const [count , setCount] = useState(0)
  function increaseCount(){
    setCount(count + 1)
  }

   function decreaseCount(){
    setCount(count - 1)
  }
  
  function toggleValue(val) {
    console.log(val);
    if (typeof val!= "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
};

export default useToggle;
