"use client";

import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [editingTask, setEditingTask] = useState<string | null>(null);

  const addTask = (task: string) => {
    if (editingTask) {
      const updatedTasks = tasks.map((t) =>
        t.text === editingTask ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="wrapper">
      <h1>ToDo Application</h1>
      <TodoForm addTask={addTask} editingTask={editingTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default TodoApp;
