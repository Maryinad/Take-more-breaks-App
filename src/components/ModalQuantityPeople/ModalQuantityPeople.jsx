import React from 'react';
import close from '../../img/icon/close.png';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <div>
        <p>How many people are you?</p>
        <Link to="/activities">
          <button>Only me</button>
        </Link>
        <Link to="/activities">
          <button>More that 1 person</button>
        </Link>
      </div>
    </div>
  );
}
