import React from 'react';
import GoalItem from './GoalItem';
import "./styles/GoalList.scss";

const GoalList = ({GoalList, onRemove}) => {

    return <div className="goal-list-container">
        {GoalList.map(item => <GoalItem key={item.id} item={item} onRemove={onRemove}/>)}
    </div>
};

export default GoalList;