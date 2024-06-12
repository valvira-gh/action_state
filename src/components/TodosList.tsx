import { todos } from "./data";

const TodosList: React.FC = () => {
  return (
    <section className="flex flex-col items-center m-4">
      <h2 className="text-2xl font-semibold">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className=" text-md">
            {todo.todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosList;
