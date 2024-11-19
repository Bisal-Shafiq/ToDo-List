import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

interface TodoListProps {
  tasks: { text: string; completed: boolean }[];
  deleteTask: (index: number) => void;
  toggleTaskCompletion: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  deleteTask,
  toggleTaskCompletion,
}) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p className="no-tasks">No tasks available. Add one to get started!</p>
      )}
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div className="flex items-center">
            {/* Removing the background box behind the checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="w-5 h-5 mr-4"
            />
            <span>{task.text}</span>
          </div>
          <div className="icon-buttons">
            <button
              onClick={() => deleteTask(index)}
              className="delete"
              title="Delete Task"
            >
              <FaTrash />
            </button>
            <button
              onClick={() => toggleTaskCompletion(index)}
              className="edit"
              title="Edit Task"
            >
              <FaEdit />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
