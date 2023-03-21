
import { useState, useEffect } from "react";
import axiosInstance from "../../../../../../config/axios";
import { Task } from "../../../../../../models";

type UseCreateTaskProps = {
  createTask: (task: Task) => Promise<void>;
};

const useCreateTask = (): UseCreateTaskProps => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axiosInstance.get("/tasks");
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const createTask = async (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    await axiosInstance.post("/tasks", newTask);
  };

  return { createTask };
};

export default useCreateTask;

