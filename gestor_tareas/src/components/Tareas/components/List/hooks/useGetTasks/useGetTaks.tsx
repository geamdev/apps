import { useEffect, useState } from "react";
import { Task } from "../../../../../../models";
import { deleteTask, getTasks, updateTask } from "../../../../../../services";

type UseGetTasksReturnType = {
  tasks: Task[];
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  refetch: () => void;
  deleteTask: (taskId: string) => Promise<void>; // Agregar esta propiedad
  updateTask: (task: Task) => Promise<void>;
};

const useGetTasks = (): UseGetTasksReturnType => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    const tasks = await getTasks();
    setTasks(tasks);
    setIsLoading(false);
  };

  const deleteTaskById = async (taskId: string) => {
    await deleteTask(+taskId);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== +taskId));
  };

  const updateTaskById = async (updatedTask: Task) => {
    await updateTask(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, isLoading, setIsLoading, refetch: fetchTasks, deleteTask: deleteTaskById, updateTask: updateTaskById };
};

export default useGetTasks;
