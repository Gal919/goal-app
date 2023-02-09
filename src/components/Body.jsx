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
  };

  const updateCheckedValues = (id, checked) => {
      const updatedList = [...list];
      const item = updatedList.find(item => item.id === id);
      item.isChecked = checked ? true : false; 

      setList(updatedList);
  };

  const handleDeleteSelected = () => {
    const newList = list.filter(item => item.isChecked === false);
    setList(newList);
  };

  const handleMarkAsDone = () => {
    console.log('is marked');
  };

  return <div className="body-container">
    <GoalForm onAdd={addGoal}/>
    <button onClick={handleDeleteSelected}>Delete Selected</button>
    <button onClick={handleMarkAsDone}>Mark as Done</button>
    <GoalList GoalList={list} onRemove={removeGoal} updateCheckedValues={updateCheckedValues} />
  </div>;
};

export default Body;
