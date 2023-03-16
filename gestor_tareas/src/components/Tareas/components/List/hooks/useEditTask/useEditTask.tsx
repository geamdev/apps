import { useState } from "react";
import { Task } from "../../../../../../models";
import ModalEdit from "../../../../../Modal/ModalEdit";
import Form from "../../../Form";

const useEditTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [task, setTask] = useState<Task | null>(null);
  const openModal = (task: Task) => {
    setTask(task);
    setOpen(true);
  };
  return {
    openModal,
    renderModal: () => {
      return (
        <ModalEdit isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </ModalEdit>
      );
    }
  };
};

export default useEditTask;
