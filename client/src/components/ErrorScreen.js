import React from "react";
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <Wrapper>
      <FaBomb />
      <h1>An unknown error has occurred.</h1>
      <p>Please try refreshing the page, or go ask for help on quora.com</p>
      <div>(┛ಠ_ಠ)┛彡┻━┻</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  svg {
    font-size: 5rem;
  }
  svg,
  h1,
  p {
    margin: 0.5rem;
  }
`;

export default ErrorPage;
