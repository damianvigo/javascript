import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
      <div onClick={handleModalContainerClick} className='modal-container'>
        <button onClick={closeModal} className='modal-close'>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
