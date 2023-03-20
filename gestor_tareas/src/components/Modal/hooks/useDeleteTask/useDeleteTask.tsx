import { useState } from "react";
import Form from "../../../Tareas/components/Form";
import ModalDelete from "../../ModalDelete";

const useDeleteTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  
  return {
    openModal,
    renderModal: () => {
      return (
        <ModalDelete isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </ModalDelete>
      );
    }
  };
};

export default useDeleteTask;
