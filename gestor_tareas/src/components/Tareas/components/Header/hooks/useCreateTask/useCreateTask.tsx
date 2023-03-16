import { useState } from "react";
import ModalAdd from "../../../../../Modal/ModalAdd";
import Form from "../../../Form";

const useCreateTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  return {
    openModal,
    renderModal: () => {
      return (
        <ModalAdd isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </ModalAdd>
      );
    }
  };
};

export default useCreateTask;
