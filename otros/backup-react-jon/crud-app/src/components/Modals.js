import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';
import SongSearch from './SongSearch';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Content modal 1</p>
        <img src='https://placeimg.com/400/400/animals' alt='Animals' />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Other Modal</h3>
        <p>Content modal 2</p>
        <img src='https://placeimg.com/400/400/nature' alt='Nature' />
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal in Portal</h3>
        <p>Content Portal</p>
        <img src='https://placeimg.com/400/400/tech' alt='Tech' />
      </ModalPortal>
    </div>
  );
};

export default Modals;
