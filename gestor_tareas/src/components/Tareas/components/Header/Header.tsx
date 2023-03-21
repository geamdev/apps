import { useState } from "react";
import { AddTaskModal } from "../../../Modal";
import { useCreateTask } from "./hooks";

const Header = () => {
  const { createTask } = useCreateTask();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateTask = async (taskTitle: string) => {
    const newTask = {
      userId: 1,
      title: taskTitle,
      completed: false,
      status: "pendiente",
      startedAt: new Date().toISOString(),
      completedAt: null,
    };
    await createTask(newTask);
    setIsModalOpen(false);
  };

  return (
    <div className="flex m-10">
      <h1 className="text-4xl font-bold">Tasks</h1>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-10 py-3 font-medium text-base text-center rounded-full border hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ml-auto"
      >
          New Task
      </button>
      {isModalOpen && <AddTaskModal onCreateTask={handleCreateTask} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Header;
