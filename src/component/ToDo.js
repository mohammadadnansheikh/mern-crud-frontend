import React from "react";
import { IconName } from "react-icons/bi";
// import { IconName } from "react-icons/ai";

const ToDo = ({ text, upDateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="add" onClick={upDateMode}>UPDATE</div>
      <div className="add" onClick={deleteTodo}>DELETE</div>
     
    </div>
  );
};



export default ToDo;
