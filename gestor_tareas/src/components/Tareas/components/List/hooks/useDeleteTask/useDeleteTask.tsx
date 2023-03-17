import { useState } from "react";
import { Task } from "../../../../../../models";
import ModalDelete from "../../../../../Modal/ModalDelete";
import Form from "../../../Form";

const useDeleteTask = () => {
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
        <ModalDelete isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </ModalDelete>
      );
    }
  }
};

export default  useDeleteTask;