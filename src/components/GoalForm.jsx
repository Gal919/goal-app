import React, { useState } from "react";
import './styles/GoalForm.scss';

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
    <div className="goal-form-right">
      <form id="goal-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </label>
      </form>
      </div>
      <div className="goal-form-left">
      <button form="goal-form" type="submit">Set Goal</button>
      </div>
    </div>
  );
};

export default GoalForm;
