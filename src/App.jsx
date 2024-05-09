import DeleteTodo from "./components/DeleteTodo";
import Addtodo from "./components/AddTodo";
import AppName from "./components/AppName";
import DeleteTodo1 from "./components/DeleteTodo1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo />
      <div className="items-container">
        <DeleteTodo />
        <DeleteTodo1 />
      </div>
    </center>
  );
}

export default App;
