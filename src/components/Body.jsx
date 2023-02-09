import React, {useState} from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import "./styles/Body.scss";

const Body = () => {
  const [list, setList] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);

  const addGoal = item => {
    setList([...list, item]);
  };

  const removeGoal = (id, checked) => {
    const newList = list.filter(item => item.id !== id);
    setCheckedCount(pre => checked ? pre - 1 : pre);
    setList(newList);
  };

  const updateCheckedValues = (id, checked) => {
      const updatedList = [...list];
      const item = updatedList.find(item => item.id === id);
      item.isChecked = checked ? true : false; 

      setCheckedCount(pre => checked ?  pre + 1 : pre - 1);
      setList(updatedList);
  };

  const handleDeleteSelected = () => {
    const newList = list.filter(item => item.isChecked === false);
    setCheckedCount(pre => pre - (list.length - newList.length));
    setList(newList);
  };

  const handleMarkAsDone = () => {
    const updatedList = [...list];
    updatedList.forEach((item) => {
      if (item.isChecked === true) {
        setCheckedCount(pre => pre - 1)
        item.isChecked = false;
        item.status = 'done';
      };
    });
    setList(updatedList);
  };

  return (
    <div className="body-container">
      <GoalForm onAdd={addGoal} />
      <GoalList
        GoalList={list}
        checkedCount={checkedCount}
        onRemove={removeGoal}
        updateCheckedValues={updateCheckedValues}
        handleDeleteSelected={handleDeleteSelected}
        handleMarkAsDone={handleMarkAsDone}
      />
    </div>
  );
};

export default Body;
