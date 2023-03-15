import axiosInstance from "../config/axios";
import { User } from "../models";

export const getUsers = async () => axiosInstance.get<User[]>("/users");
