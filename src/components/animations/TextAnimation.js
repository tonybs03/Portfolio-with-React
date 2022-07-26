import React from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0% {opacity:0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); background-position: 0%;}
  25% {opacity:1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); background-position: 50%;}
  75% {opacity:1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); background-position: 50%;}
  100% {opacity:0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); background-position: 0%;}
`
const Wrapper = styled.span`
  display: inline-block;
  span {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
    background: -webkit-linear-gradient(bottom, #e066ff, #4747d1, #2193b0, #6dd5ed);
    background-size: 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 1.0s;
  }
`

const funcs = {
    TextAnimationA() {
        const textArray = "About".split("")
        return <Wrapper>
                {textArray.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
               </Wrapper>
    },

    TextAnimationM() {
        const textArray = "Me".split("")
        return <Wrapper>
                {textArray.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
               </Wrapper>
    },

    TextAnimationR() {
      const textArray = "Resume".split("")
      return <Wrapper>
              {textArray.map((item, index) => (
                  <span key={index}>{item}</span>
              ))}
             </Wrapper>
  },

  TextAnimationP() {
    const textArray = "Portfolio".split("")
    return <Wrapper>
            {textArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
           </Wrapper>
}
}

export default funcs



