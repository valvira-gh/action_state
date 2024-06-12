"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createTodo } from "./actions";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

const AddTodoForm = () => {
  const [state, formAction] = useActionState(createTodo, {
    message: "",
  });

  console.log("AddTodoForm state:", state);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Create a new todo</CardTitle>
        <CardDescription>What do you want to do next?</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col">
          <Input
            className="my-2"
            type="text"
            name="todo"
            placeholder="Todo..."
          />

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTodoForm;
