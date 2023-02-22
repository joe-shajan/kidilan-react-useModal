import { useModal } from "./hooks/useModal";

const App = () => {
  const { Modal, openModal, closeModal } = useModal();
  const {
    Modal: Modal1,
    openModal: openModal1,
    closeModal: closeModal1,
  } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={openModal1}>Open Modal1</button>
      <Modal>
        {/* <div
          style={{
            width: "500px",
            height: "500px",
            background: "red",
          }}
        > */}
        <h2>Modal Content</h2>
        {/* </div> */}
      </Modal>
      <Modal1>
        <div
          style={{
            width: "500px",
            height: "500px",
            background: "blue",
          }}
        >
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <button onClick={closeModal1}>Close Modal</button>
        </div>
      </Modal1>
    </>
  );
};

export default App;
