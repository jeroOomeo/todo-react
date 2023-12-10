import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header />
      <Form
        todo={todo}
        todoList={todoList}
        setTodo={setTodo}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
