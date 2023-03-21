import { useState } from "react";

type ModalProps = {
  onCreateTask: (taskTitle: string) => void;
  onClose: () => void;
};

const AddTaskModal = ({ onCreateTask, onClose }: ModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleCreateTask = () => {
    onCreateTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div 
      className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)"
      }}
    >
      <div 
        className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        style={{
          width: "600px",
          height: "240px",
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      >
        <div className="px-8 py-8 lg:px-9">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create Task
          </h3>
          <form className="space-y-6">
            <div>
              <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="taskTitle"
              >
                Title:
              </label>
              <input
                type="text"
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Task Title"
                required
              />
            </div>
            <div className="flex items-center">
              <button 
                onClick={onClose}
                className="px-10 py-3 font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-full active:bg-gray-50 hover:bg-gray-50 focus:outline-none focus:shadow-outline-gray"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateTask}
                className="px-10 py-3 font-medium text-base text-center rounded-full border hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ml-auto"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal
