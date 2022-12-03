import "./App.css";
import ToDo from "./component/ToDo";
import { useEffect, useState } from "react";
import { getAllTodo, addTodo, updateTodo , deleteTodo} from "./utils/HandleApi";

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);


  const upDateMode = (_id, text)=>{
    setIsUpdating(true);
    setText(text);
    setTodoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input
            type="text"
            placeholder="ADD toDos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(todoId, text, setText, setTodo, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return <ToDo key={item._id} 
                         text={item.text} 
                         upDateMode = {()=>upDateMode(item._id, item.text)}
                         deleteTodo = {()=>deleteTodo(item._id, setTodo)}
                   />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
