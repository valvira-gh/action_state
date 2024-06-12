import TodosList from "@/components/TodosList";
import AddTodoForm from "@/components/AddTodoForm";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <TodosList />
      <AddTodoForm />
    </main>
  );
};

export default Home;
