"use client";

import { useActionState } from "react";
import { action } from "./actions";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form = () => {
  const [state, formAction, isPending] = useActionState(action, {
    name: "",
    error: "",
    status: false,
  });

  console.log(state);

  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>useActionState() Form</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {/* display error */}
            {state.error && (
              <p className="text-red-500 text-sm">{state.error}</p>
            )}
          </CardDescription>
        </CardContent>
        <form action={formAction} className="flex flex-col">
          <Input type="text" name="name" placeholder="Name..." />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </form>{" "}
      </Card>
    </main>
  );
};

export default Form;
