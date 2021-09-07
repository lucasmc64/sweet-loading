import React from "react";
import styled, { keyframes } from "styled-components";

import DivContainer from "../helpers/Container";

const spinKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const changeShapeKeyframes = keyframes`
  0% {
    clip-path: polygon(50% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%);
  }
  
  25% {
    clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
  }
  
  75% {
    clip-path: polygon(50% 50%, 0% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
  }
  
  100% {
    clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%);
  } 
`;

const DivSemicircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    transparent 51%,
    #d2d2d8 51%
  ); // Container width = 71%
  animation: ${changeShapeKeyframes} 1.25s infinite linear alternate,
    ${spinKeyframes} 1.25s infinite linear;
`;

const SpinningSemicircle = ({ baseSize = null }) => {
  return (
    <DivContainer baseSize={baseSize}>
      <DivSemicircle />
    </DivContainer>
  );
};

export default SpinningSemicircle;
