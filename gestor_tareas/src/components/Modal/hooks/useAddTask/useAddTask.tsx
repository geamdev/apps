import { useEffect, useState } from "react";
import { Task } from "../../../../models";
import { getTasks } from "../../../../services";

const useAddTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      console.log("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    fetchTasks
  };
};

export default useAddTask;
