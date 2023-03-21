import axios from "../config/axios";
import { Task } from "../models";


export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get("/tasks");
  return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await axios.post("/tasks", task);
  return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const response = await axios.put(`/tasks/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (taskId: number): Promise<void> => {
  await axios.delete(`/tasks/${taskId}`);
};
