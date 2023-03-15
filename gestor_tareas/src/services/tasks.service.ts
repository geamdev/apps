import axiosInstance from "../config/axios";
import { Task } from "../models";

export const getTasks = async () => axiosInstance.get<Task[]>("/tasks");
