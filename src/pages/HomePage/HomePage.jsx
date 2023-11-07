import { AiFillPlayCircle } from 'react-icons/ai';
import React from 'react';
import brandLogo from '../../img/icon/brandLogo.png';
import { Link } from 'react-router-dom';

const HomePage = ({ onButtonClick }) => {
  return (
    <div>
      <Link to="/activities">
        <button onClick={onButtonClick}>
          <img src={brandLogo}></img>
        </button>
      </Link>
      <h2>START BREAK</h2>
    </div>
  );
};

export default StartBreak;
