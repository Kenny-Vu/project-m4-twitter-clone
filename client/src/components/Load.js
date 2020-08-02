import React from "react";

import styled, { keyframes } from "styled-components";

import { RiLoader2Line } from "react-icons/ri";

const Load = () => {
  return (
    <Wrapper>
      <RiLoader2Line />
    </Wrapper>
  );
};

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
 80%{
    transform: rotate(400deg);
}
 100%{
    transform: rotate(360deg);
}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  svg {
    font-size: 4rem;
    animation: ${rotate} 1500ms linear infinite;
  }
`;

export default Load;
