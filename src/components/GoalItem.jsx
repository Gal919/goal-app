import React from "react";
import "./styles/GoalItem.scss";

const GoalItem = ({ item, onRemove }) => {
  const {
    id,
    text: { title, description },
  } = item;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="goal-item-container">
      <div className="goal-item-right">
        <h3>{title} </h3>
        <p>{description}</p>
      </div>
      <div className="goal-item-left">
        <button onClick={handleRemove}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
