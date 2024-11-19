import React, { useEffect, useState } from "react";

interface TodoFormProps {
  addTask: (task: string) => void;
  editingTask: string | null;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask, editingTask }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editingTask !== null) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="input-container flex flex-col items-center mb-6 gap-4 w-full">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for the Enter key
        placeholder="Enter your task here..."
        className="w-full max-w-md px-4 py-2 rounded-md shadow-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
      <button
        onClick={handleSubmit}
        className="add w-full max-w-md px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition-all"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TodoForm;
