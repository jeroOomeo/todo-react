const Todo = ({ todo, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };
  return (
    <div className="flex bg-gray-200 items-center justify-between px-4 w-3/4 rounded-2xl my-4">
      <h2 className="my-4"> {todo.name} </h2>
      <button
        onClick={handleDelete}
        type="submit"
        className="bg-[red] w-12 h-8 rounded-md my-4"
      >
        Done
      </button>
    </div>
  );
};

export default Todo;
