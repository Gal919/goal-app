import React, { useState } from "react";
import "./styles/GoalForm.scss";

const GoalForm = ({ onAdd }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const [formError, setFormError] = useState({});

  const handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let isValid = validateForm();

    if(isValid) {
      onAdd({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isChecked: false,
        isDisabeld: false,
      });
  
      setInput({
        title: "",
        description: "",
      });
    };
  };

  const validateForm = () => {
    let err = {};

    if((input.title).trim() === "") {
      err.title = 'Please enter title';
    };

    if((input.description).trim() === "") {
      err.description = 'Please enter description';
    };

    setFormError({...err});

    return Object.keys(err).length < 1;
  };

  return (
    <div className="goal-form-container">
      <form id="goal-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
        <span>{formError.title}</span>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={handleChange}
        />
        <span>{formError.description}</span>
      </form>
      <button form="goal-form" type="submit">
        Set Goal
      </button>
    </div>
  );
};

export default GoalForm;
