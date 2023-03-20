import axiosInstance from "../config/axios";
import { Task } from "../models";

export const getTasks = async () => axiosInstance.get<Task[]>("/tasks");

export const deleteTask = async (taskId: string) =>
  axiosInstance.delete<Task>(`/tasks/${taskId}`);
