import { useState } from "react";
import { ModalProps } from "./types";
const ModalEdit: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [completion_date, setCompletion_date] = useState<string>("");
  const [id, setId] = useState<string>("");

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
          height: "430px",
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      >
        <div className="px-8 py-8 lg:px-9">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Edit task
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Task title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Estatus
              </label>
              <select
                name="status"
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              >
                <option value="">Select an option</option>
                <option value="false">En Proceso</option>
                <option value="false">Pendiente</option>
                <option value="true">Finalizado</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="completion_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Completion date
              </label>
              <input
                type="date"
                name="completion_date"
                id="completion_date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Task completion date"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                type="button"
                className="px-10 py-3 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-full active:bg-gray-50 hover:bg-gray-50 focus:outline-none focus:shadow-outline-gray"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-full active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
