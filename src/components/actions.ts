"use server";
import { todos } from "./data";

type FormState = {
  message: string;
};

export const createTodo = async (prevState: FormState, queryData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const todo = queryData.get("todo") as string;

  if (!todo || todo.trim() === "" || typeof todo !== "string") {
    return {
      message: "Todo is invalid or missing",
    };
  }

  console.log("Todo:", todo);

  todos.push({
    id: todos.length + 1,
    todo: todo,
    completed: false,
  });

  return {
    message: "Todo added successfully",
  };
};
