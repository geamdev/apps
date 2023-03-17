import { useState } from "react";
import { deleteTask } from "../../../../services";

const useDeleteTask = () => {
  const [error, setError] = useState("");

  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId.toString());
    } catch (err) {
      setError(err.message);
    }
  };

  return { handleDeleteTask, error };
};

export default useDeleteTask;
