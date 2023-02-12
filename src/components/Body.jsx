import React, {useState} from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import "./styles/Body.scss";

const Body = () => {
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const addGoal = item => {
    setList([...list, item]);
  };

  const removeGoal = (id) => {
    const newList = list.filter(item => item.id !== id);
    const newCheckedList = checkedList.filter(item => item.id !== id);

    setCheckedList(newCheckedList);
    setList(newList);
  };

  const updateCheckedValues = (id, checked) => {
      const updatedList = [...list];
      const item = updatedList.find(item => item.id === id);
      item.isChecked = checked ? true : false; 

      if(checked) setCheckedList([...checkedList, item]) 
      else {
        const newList = checkedList.filter(item => item.id !== id);
        setCheckedList(newList);
      };
      
      setList(updatedList);
  };

  const handleDeleteSelected = () => {
    const newList = list.filter(item => item.isChecked === false);

    setCheckedList([]);
    setList(newList);
  };

  const handleMarkAsDone = () => {
    const updatedList = [...list];
    updatedList.forEach((item) => {
      if (item.isChecked === true) {
        item.isChecked = false;
        item.status = 'done';
      };
    });
    
    setCheckedList([]);
    setList(updatedList);
  };

  return (
    <div className="body-container">
      <GoalForm onAdd={addGoal} />
      <GoalList
        GoalList={list}
        checkedList={checkedList}
        onRemove={removeGoal}
        updateCheckedValues={updateCheckedValues}
        handleDeleteSelected={handleDeleteSelected}
        handleMarkAsDone={handleMarkAsDone}
      />
    </div>
  );
};

export default Body;
