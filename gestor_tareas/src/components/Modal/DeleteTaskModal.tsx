import { useState } from "react";
import { Task } from "../../models";
import { deleteTask } from "../../services";

interface Props {
  task: Task | null;
  onClose: () => void;
  onDeleteTaskConfirm: () => void;
}

const DeleteTaskModal = ({ task, onClose, onDeleteTaskConfirm  }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (!task) return;

    setIsLoading(true);
    setError("");

    try {
      await deleteTask(task.id);
      onDeleteTaskConfirm();
    } catch (e:any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
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
      >
        <div className="px-8 py-8 lg:px-9">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Delete task
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Are you sure you want to delete this task?
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="px-10 py-3 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-full active:bg-gray-50 hover:bg-gray-50 focus:outline-none focus:shadow-outline-gray"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-10 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                onClick={handleDelete}
                disabled={isLoading}
              >
              {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
