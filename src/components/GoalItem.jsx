import React from "react";
import "./styles/GoalItem.scss";

const GoalItem = ({ item, onRemove, updateCheckedValues }) => {
  const { id, text: { title, description }, isChecked, status } = item;

  const handleRemove = () => {
    onRemove(id, isChecked);
  };

  const handleIsChecked = e => {
    const checked = e.target.checked;
    updateCheckedValues(id, checked);
  };

  return (
    <div className="goal-item-container">
      <div className="goal-item-row">
        <div className="goal-item-checkbox">
          <input type="checkbox" onChange={handleIsChecked} checked={isChecked}/>
        </div>
        <div className={`goal-item-text ${status}`}>
          <h4>{title} </h4>
          <p>{description}</p>
        </div>
        <div className="goal-item-left">
          <button onClick={handleRemove}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalItem;
