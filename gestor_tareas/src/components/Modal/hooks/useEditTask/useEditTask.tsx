import { useState } from "react";
import Form from "../../../Tareas/components/Form";
import ModalEdit from "../../ModalEdit";

const useEditTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
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
