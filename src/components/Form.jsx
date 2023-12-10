import { nanoid } from "nanoid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: nanoid() }]);
    setTodo("");
  };
  return (
    <div className="h-36 bg-gray-400 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add To do"
          value={todo}
          className="h-12 mr-4 px-2 rounded-2xl"
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-[red] w-24 h-12 rounded-2xl">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
