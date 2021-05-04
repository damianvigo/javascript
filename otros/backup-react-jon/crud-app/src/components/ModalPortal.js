import ReactDOM from 'react-dom';
import './Modal.css';

const ModalPortal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
      <div onClick={handleModalContainerClick} className='modal-container'>
        <button onClick={closeModal} className='modal-close'>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modal-portal')
  );
};

export default ModalPortal;
