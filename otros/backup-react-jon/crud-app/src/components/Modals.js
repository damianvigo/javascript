import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <h2>Modals</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Content modal 1</p>
        <img src='https://placeimg.com/400/400/animals' alt='Animals' />
      </Modal>
      <button>Modal 2</button>
      {/*  <Modal>
        <h3>Other Modal</h3>
        <p>Content modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature"/>
      </Modal> */}
    </div>
  );
};

export default Modals;
