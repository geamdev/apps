import { useEffect, useState } from "react";
import { Task } from "../../../../models";
import { addTask, getTasks } from "../../../../services";

const useListTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      fetchTasks();
    },
    [tasks]
  );

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      setError("Error fetching tasks");
    }
  };

  const handleAddTask = async (newTask: Task) => {
    try {
      const response = await addTask(newTask);
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError("Error adding task");
    }
  };

  return { tasks, error, handleAddTask };
};

export default useListTasks;
