import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("does not add an empty todo", () => {
    render(<TodoList />);
    const button = screen.getByText("Add Todo");
  
    fireEvent.click(button); // Simulates adding without input
    expect(screen.queryByText("")).not.toBeInTheDocument();
  });
  
  test("does not add duplicate todos", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");
  
    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);
  
    const todos = screen.getAllByText("Learn React");
    expect(todos.length).toBe(1); // Ensures no duplicates
  });
  

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
