import { useState } from "react";

import { DeleteTaskModal, EditTaskModal } from "../../../Modal";
import useGetTasks from "./hooks/useGetTasks";
import { PuffLoader } from "react-spinners";
import { Task } from "../../../../models";
import { TaskRow } from "./components";

const List = () => {
  const { tasks, isLoading, refetch, deleteTask, updateTask } = useGetTasks();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleDeleteTask = (task: Task) => {
    setSelectedTask(task);
    setIsDeleteModalOpen(true);   
  };

  const handleEditModalClose = () => {
    setSelectedTask(selectedTask ?? null);
    setIsEditModalOpen(false);
  };
  
  const handleDeleteModalClose = () => {
    setSelectedTask(selectedTask ?? null); 
    setIsDeleteModalOpen(false);
  };

  const handleUpdateTask = async (updatedTask: Task) => {
    if (selectedTask !== null) {
      await updateTask(updatedTask);
      refetch();
      handleEditModalClose();
    }
  }    

  const handleDeleteTaskConfirm = async () => {
    if (selectedTask) {
      await deleteTask(selectedTask.id.toString());
      refetch();
      handleDeleteModalClose();
    }
  };

  return (
    <div className="px-10">
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader color="#1976d2" />
        </div>
      )}
      {!isLoading && tasks.length === 0 && <p>No tasks found.</p>}
      {!isLoading && tasks.length > 0 && (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Completed At
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onEditTask={() => handleEditTask(task)}
                onDeleteTask={() => handleDeleteTask(task)}
              />
            ))}
          </tbody>
        </table>
      )}
      {isEditModalOpen && (
        <EditTaskModal
          task={selectedTask}
          onClose={handleEditModalClose}
          onUpdateTask={handleUpdateTask}
          setIsOpen={setIsEditModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteTaskModal
          task={selectedTask}
          onClose={handleDeleteModalClose}
          onDeleteTaskConfirm={handleDeleteTaskConfirm}
        />
      )}
    </div>
  );
};

export default List;
