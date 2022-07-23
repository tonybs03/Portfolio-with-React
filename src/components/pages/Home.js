import React from 'react';
import './Home.css';
import home from '../assets/images/home.png'
// import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <div class="homemain">
      <div style={{ width: '70%', margin: 'auto' }} >
        <div class='row'>
          <h1>Let Me Introduce Myself!</h1>
          <div class='col-7' style={{ marginTop: '30px' }}>
            <h2>I am a web developer in training...</h2>
            <h2>I am also an Astrophysics researcher in training...</h2>
            <h2>I am also an Astrophysics researcher in training...</h2>
          </div>
          <img class='col-5' src={home} alt='placeholder' />
        </div>
      </div>
    </div>
  );
}
