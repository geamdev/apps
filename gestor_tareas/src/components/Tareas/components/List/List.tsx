import { IconTrash } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { useDeleteTask, useEditTask } from "../../../Modal/hooks";

import { useListTasks } from "./hooks";

const List: React.FC = () => {
  const { tasks } = useListTasks();
  const {
    openModal: openModalEdit,
    renderModal: renderModalEdit
  } = useEditTask();
  const {
    openModal: openModalDelete,
    renderModal: renderModalDelete
  } = useDeleteTask();

  return (
    <div className="px-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Completed
            </th>
            <th scope="col" className="px-6 py-3">
              Estatus
            </th>
            <th scope="col" className="px-6 py-3">
              Completion Date
            </th>
            <th scope="col" className="px-6 py-3 w-20">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task =>
            <tr
              key={task.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {task.id}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {task.title}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {task.completed ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {task.status}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {task.completionDate}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6  py-4">
                <div className="flex justify-end">
                  <button 
                    onClick={() => openModalEdit()}
                    className="mr-2 px-4 py-4 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-full active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue uppercase">
                    <IconPencil />
                  </button>
                  {renderModalEdit()}
                  <button 
                    onClick={() => openModalDelete()}
                    className="mr-2 px-4 py-4 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red-900 focus:ring-opacity-50 uppercase">
                    <IconTrash />
                  </button>
                  {renderModalDelete()}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
