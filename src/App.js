import './App.css';
import React, {useState} from "react";
import TodoList from './Components/TodoList';

function App() {
  const [newTodo,setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo,i)=> {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo,i)=>{
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }


  return (
    <div className='App' style={{textAlign:"center"}}>
      <h1>To Do List Assignment</h1>
      <form onSubmit={(event)=>{handleNewTodoSubmit(event);}}>
        <input onChange={(event) => {setNewTodo(event.target.value);}} type="text" value={newTodo}/>
        <div>
          <button>ADD</button>
        </div>
      </form>
      <hr/>
      {/* Display to do list items */}
      {
        todos.map((todo,i)=>{
          

          return <TodoList 
          key={i} 
          todo = {todo} 
          handleToggleComplete= {handleToggleComplete} 
          i={i}
          handleTodoDelete = {handleTodoDelete}
          />
          })
      }
    </div>
  );
}




export default App;