import React, { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit", values);
    setSubmit(true);

    setValues(initialValue);
    setSubmit("");
  };

  return { values, handleChange, submit, setSubmit, handleSubmit };
};

export default useForm;
