import { useState } from "react";
import Modal from "../../../../../Modal";
import Form from "../../../Form";

const useCreateUser = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  return {
    openModal,
    renderModal: () => {
      return (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </Modal>
      );
    }
  };
};

export default useCreateUser;
