import React, {useState} from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import "./styles/Body.scss";

const Body = () => {
  const [list, setList] = useState([]);

  
  const addGoal = item => {
    setList([...list, item]);
  };

  const removeGoal = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return <div className="body-container">
    <GoalForm onAdd={addGoal}/>
    <GoalList GoalList={list} onRemove={removeGoal}/>
  </div>;
};

export default Body;