import React from "react";
import GoalItem from "./GoalItem";
import "./styles/GoalList.scss";

const GoalList = ({ GoalList, checkedCount, onRemove, updateCheckedValues, handleDeleteSelected, handleMarkAsDone }) => {

  return (
    <div className="goal-list-container">
      <h3>My List</h3>
      {GoalList.length < 1 && <p>No Gaols to Show</p>}
      <div className="goal-list-buttons">
        {GoalList.length > 0 && (
          <button onClick={handleDeleteSelected} disabled={checkedCount === 0}>
            Delete Selected
          </button>
        )}
        {GoalList.length > 0 && (
          <button onClick={handleMarkAsDone} disabled={checkedCount === 0}>
            Mark as Done
          </button>
        )}
      </div>
      {GoalList.map((item) => (
        <GoalItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          updateCheckedValues={updateCheckedValues}
        />
      ))}
    </div>
  );
};

export default GoalList;
