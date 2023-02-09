import React from "react";
import GoalItem from "./GoalItem";
import "./styles/GoalList.scss";

const GoalList = ({ GoalList, onRemove, updateCheckedValues }) => {
  return (
    <div className="goal-list-container">
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
