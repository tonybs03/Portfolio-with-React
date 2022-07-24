import React from 'react';
import funcs from '../animations/TextAnimation-AM';
import './About.css';
import PP from '../assets/images/PP.jpg'


export default function About() {
  return (
    <div class="aboutmemain">
      <div class="aboutmebody">
        <div class="aboutmetitle">
          <funcs.TextAnimationA /> <funcs.TextAnimationM />
        </div>
        <div class="aboutmesection">
          <div class="aboutmetext">
            <p>Hi there, my name is Tony. I am from Jiaxing, China and currently located in Toronto, Canada. I speak English as well as Mandarin, and my
              Chinese name is 范俊晶 (Fan Junjing). I spent the first 15 years of my life in China, and moved to Toronto
              in the year 2012. I graduated from University of Toronto with a major specialist degree in Physics, and I
              went on to do Astrophysics research work afterwards. </p>

            <p>During my academic years, I have learned to professonalize my skills in Python for data analysis,
              and in LaTeX for efficient communication. Now, I am taking my coding skill to another level by learning to become
              a full stack web/app developer. I am especially interested in Fron-End desgining. </p>

            <p>Apart from my career, I am a big Comic Book nerd, and a big video game player. I am a very adventurous
              person, especially when it comes to food and travelling. A quote that I live by is <span class='purpletextsmall'>
                "Love all, trust a few, do wrong to none..."</span> by Shakespeare.</p>
          </div>
          <div class="aboutmeimg">
            <img class='aboutmejpg' src={PP} alt='placeholder' />
            <div class="overlay">
              <div class="text">Me at a friend's wedding...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
