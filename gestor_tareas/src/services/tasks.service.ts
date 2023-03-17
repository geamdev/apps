import axiosInstance from "../config/axios";
import { Task } from "../models";

export const getTasks = async () => axiosInstance.get<Task[]>("/tasks");

export const addTask = async (task: Task) =>
  axiosInstance.post<Task>("/tasks", task);

export const editTask = async (taskId: string, updatedTask: Task) =>
  axiosInstance.put<Task>(`/tasks/${taskId}`, updatedTask);

export const deleteTask = async (taskId: string) =>
  axiosInstance.delete(`/tasks/${taskId}`);
