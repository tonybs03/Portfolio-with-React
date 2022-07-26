import React from 'react';
import './Home.css';
import home from '../assets/images/home.png'
// import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Home() {
  return (
    <div class="homemain">
      <div class="homebody">
        <h1 style={{ fontWeight: 'bolder', marginTop: '100px' }}>Let Me Introduce Myself!!!<span class="waving-hand">👋</span></h1>
        <div class='intro'>
          <div class='introtext'>
            <h2>I am a <span class='purpletext'>Web Developer</span> in training...</h2>
            <h2>I am an <span class='purpletext'>Astrophysics Researcher</span> at UofT...</h2>
            <h2>I am the co-founder of the <span class='purpletext'>CareToGo</span> platform...</h2>
            <h2>My favorite thing is <span class='purpletext'>Front-End</span> product design...</h2>
          </div>
          <div class='intropng'>
            <img class='homepng' src={home} alt='placeholder' />
          </div>   
        </div>
      </div>
    </div>
  );
}
