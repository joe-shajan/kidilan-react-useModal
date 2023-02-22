import { ReactNode, useState } from "react";
import { Modal } from "../components";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = ({ children }: { children: ReactNode }) => (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {children}
    </Modal>
  );

  return { Modal: ModalComponent, openModal, closeModal };
};
