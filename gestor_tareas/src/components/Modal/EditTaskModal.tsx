import { useState } from "react";
import { Task, TaskStatus } from "../../models";
import { updateTask } from "../../services";

interface Props {
  task: Task;
  onClose: () => void;
  onUpdateTask: (updatedTask: Task) => void;
  onTaskUpdated: () => void;
}

const EditTaskModal: React.FC<Props> = ({ task, onClose, onUpdateTask, onTaskUpdated }) => {
  const [title, setTitle] = useState(task?.title ?? "");
  const [status, setStatus] = useState<TaskStatus>(task?.status ?? TaskStatus.PENDING);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdate();
  }

  const handleUpdate = async () => {
    if (!task) return;

    setIsLoading(true);
    setError("");

    // Validar el valor de "status"
    if (!["pendiente", "en proceso", "finalizado"].includes(status)) {
      setError("Status inválido");
      setIsLoading(false);
      return;
    }

    const updatedTask = {
      ...task,
      title,
      status,
    };

    try {
      await updateTask(updatedTask);
      onTaskUpdated();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  const parseStatus = (value: string): TaskStatus => {
    switch (value) {
      case "pendiente":
        return TaskStatus.PENDING;
      case "en proceso":
        return TaskStatus.IN_PROGRESS;
      case "finalizado":
        return TaskStatus.COMPLETED;
      default:
        throw new Error(`Invalid status: ${value}`);
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
        style={{
          width: "600px",
          height: "340px",
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      >
        <div className="px-8 py-8 lg:px-9">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Edit task
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2.5"
              />
            </div>
            <div>
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(parseStatus(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              >
                <option value="pendiente">Pending</option>
                <option value="en proceso"> In Progress</option>
                <option value="finalizado">Completed</option>
              </select>
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
                type="submit"
                className="px-10 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-full active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditTaskModal;

            
