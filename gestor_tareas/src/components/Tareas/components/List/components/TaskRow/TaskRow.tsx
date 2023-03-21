import { IconPencil } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';

import { Task } from "../../../../../../models";

interface TaskRowProps {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskRow = ({ task, onEditTask, onDeleteTask }: TaskRowProps) => {
  const formatDate = (date: Date | null) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString();
  };
  return (
    <tr
    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="px-6 py-4">
        <div className="flex items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            {task.id}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            {task.title}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            {task.status === "finalizado" ? "Completed" : task.status === "en proceso" ? "In Progress" : "Pending"}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            {formatDate(task.startedAt)}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            {formatDate(task.completedAt)}
          </p>
        </div>
      </td>
      <td className="px-6  py-4">
        <div className="flex justify-end">
          <button
            onClick={() => onEditTask(task)}
            className="mr-2 px-4 py-4 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-full active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue uppercase">
            <IconPencil />
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="mr-2 px-4 py-4 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red-900 focus:ring-opacity-50 uppercase">
            <IconTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;

