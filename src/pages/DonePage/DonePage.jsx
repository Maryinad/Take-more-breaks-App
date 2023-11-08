import React from 'react';

import { Link } from 'react-router-dom';
import aword from '../../img/aword.png';

export default function DonePage() {
  return (
    <div>
      <img src={aword}></img>
      <h2>Well done</h2>
      <p>
        Studies show that <br /> regular breaks help to
        <br /> focus during work and <br /> improve your physical <br /> and
        mental health.
      </p>
      <Link to="/">
        <button>Continue</button>
      </Link>
    </div>
  );
}
