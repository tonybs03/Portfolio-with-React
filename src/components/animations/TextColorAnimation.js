import React from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0% {opacity:1; background-position: 0%;}
  25% {opacity:1; background-position: 50%;}
  50% {opacity:1; background-position: 100%;}
  75% {opacity:1; background-position: 50%;}
  100% {opacity:1; background-position: 0%;}
`
const Wrapper = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 12s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  background: -webkit-linear-gradient(right, #e066ff, #4747d1, #2193b0, #6dd5ed);
  background-size: 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 0%;
`

export default function TextAnimation() {
  return <Wrapper>Hi... I'm Tony</Wrapper>
}



// const typing = keyframes`
//   from { width: 0 }
//   to { width: 100% }
// `

// const blinkcaret = keyframes`
//   from, to { border-color: transparent }
//   50% { border-color: orange; }
// `



// const Wrapper = styled.span`
//   overflow: hidden; 
//   border-right: .15em solid orange; 
//   white-space: nowrap; 
//   margin: 0 auto; 
//   letter-spacing: .15em; 
//   animation: 
//     ${typing} 3.5s steps(30, end),
//     ${blinkcaret} .75s step-end infinite;
// `
 




