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
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
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
            <div className="flex">
              <button
                type="submit"
                className="px-10 py-3 font-medium text-base text-center rounded-full border border-transparent active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue bg-blue-500 text-white ml-auto"
              >
                Save task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
