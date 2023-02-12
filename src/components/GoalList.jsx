import React, { useEffect, useState } from "react";
import GoalItem from "./GoalItem";
import "./styles/GoalList.scss";

const GoalList = ({ GoalList, checkedList, onRemove, updateCheckedValues, handleDeleteSelected, handleMarkAsDone }) => {
  const [isMarkAsDoneDisabled, setIsMarkAsDoneDisabled] = useState(false);

  useEffect(() => {
    const isInProgressValue = checkedList.filter(item => item.status === 'inProgress');
    setIsMarkAsDoneDisabled(isInProgressValue.length > 0 ? false : true);
  }, [checkedList.length]);
    
  return (
    <div className="goal-list-container">
      <h3>My List</h3>
      {GoalList.length < 1 && <p className="goal-list-description">No Gaols to Show</p>}
      <div className="goal-list-buttons">
        {GoalList.length > 0 && (
          <button onClick={handleDeleteSelected} disabled={checkedList.length === 0}>
            Delete Selected
          </button>
        )}
        {GoalList.length > 0 && (
          <button onClick={handleMarkAsDone} disabled={(checkedList.length === 0) || (checkedList.length > 0 && isMarkAsDoneDisabled)}>
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
