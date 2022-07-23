import React from 'react';
import funcs from '../animations/TextAnimation-AM';
import './About.css';


export default function About() {
  return (
    <div class="aboutmemain">
      <div class="aboutmebody">
        <div class="aboutmetitle">
          <funcs.TextAnimationA /> <funcs.TextAnimationM />
        </div>
        <div class="aboutmetext">
          Hi there, my name is Tony. I am from Shanghai, China and currently located in Toronto, Canada. I speak English as well as Mandarin, and my
          Chinese name is 范俊晶 (Fan Junjing).
        </div>
        <div class="aboutmeimg">
          Hi there, my name is Tony. I am from Shanghai, China and currently located in Toronto, Canada. I speak English as well as Mandarin, and my
          Chinese name is 范俊晶 (Fan Junjing).
        </div>
      </div>
    </div>
  );
}
