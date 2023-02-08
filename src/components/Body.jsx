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

  const removeGoal = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  const addToCheckedList = id => {
    setCheckedList([...checkedList, id]);
  };

  const removeFromCheckedList = id => {
    const updateCheckedList = checkedList.filter(item => item !== id);
    setCheckedList(updateCheckedList);
  };

  const handleDeleteSelected = () => {
    const copyObjArr = [...list];

    for (let i = 0; i < copyObjArr.length; i++) {
      const obj = copyObjArr[i];
  
      if (checkedList.indexOf(obj.id) !== -1) {
        copyObjArr.splice(i, 1);
        i--;
      };
  };

  console.log(copyObjArr);
  setList(copyObjArr)
 

  
    
  };

  return <div className="body-container">
    <GoalForm onAdd={addGoal}/>
    <button onClick={handleDeleteSelected}>Delete Selected</button>
    <GoalList GoalList={list} onRemove={removeGoal} addToCheckedList={addToCheckedList} removeFromCheckedList={removeFromCheckedList}/>
  </div>;
};

export default Body;
