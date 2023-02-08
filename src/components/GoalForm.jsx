import React, { useState } from "react";
import "./styles/GoalForm.scss";

const GoalForm = ({ onAdd }) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput({
      title: "",
      description: "",
    });
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
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={handleChange}
        />
      </form>

      <button form="goal-form" type="submit">
        Set Goal
      </button>
    </div>
  );
};

export default GoalForm;
