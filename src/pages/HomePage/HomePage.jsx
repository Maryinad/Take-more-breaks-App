import React, { useState } from 'react';
import brandLogo from '../../img/icon/brandLogo.png';

import ModalQuantityPeople from 'components/ModalQuantityPeople/ModalQuantityPeople';

export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModalOpen = event => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
    document.body.classList.remove('noScrool');
  };

  return (
    <div>
      <button onClick={handleToggleModalOpen}>
        <img src={brandLogo}></img>
      </button>

      <h2>START BREAK</h2>
      {isOpenModal && (
        <ModalQuantityPeople onClose={onClose} isOpenModal={isOpenModal} />
      )}
    </div>
  );
}
