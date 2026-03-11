import React from "react";
import Modal from "../components/Modal";


function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      <h1>Reusable Modal Example</h1>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>

        <h2>Hello 👋</h2>
        <p>This is reusable modal</p>

      </Modal>

    </div>
  );
}

export default Home;