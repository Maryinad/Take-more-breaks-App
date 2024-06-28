import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function ModalQuantityPeople({ onClose }) {
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClick = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onClose]);

  return createPortal(
    <div onClick={onBackdropClick}>
      <div>
        <button type="button">
          <MdClose
            style={{ width: 20, height: 20 }}
            onClick={() => onClose()}
          />
        </button>
        <p>How many people are you?</p>
        <Link to="/activities">
          <button>Only me</button>
        </Link>
        <Link to="/activitiesMulti">
          <button>More that 1 person</button>
        </Link>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
