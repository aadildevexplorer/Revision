import React, { useId } from "react";

const Id = () => {
  const id = useId();
console.log(id)
  return (
    <div>
      <form>
        <label htmlFor={id}>Name</label>
        <input type="text" id={id} />
      </form>
    </div>
  );
};

export default Id;
