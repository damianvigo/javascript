import { useState } from 'react';

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  
  const closeModal = () => setIsOpen(false);

  // retornando array en vez de obj
  return [isOpen, openModal, closeModal];
}


