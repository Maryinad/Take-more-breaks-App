import { AiFillPlayCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import brandLogo from '../../img/icon/brandLogo.png';
import { Link } from 'react-router-dom';
import ModalQuantityPeople from 'components/ModalQuantityPeople/ModalQuantityPeople';

export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModalOpen = event => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <button onClick={handleToggleModalOpen}>
        <img src={brandLogo}></img>
      </button>

      <h2>START BREAK</h2>
      {isOpenModal && <ModalQuantityPeople />}
    </div>
  );
}
