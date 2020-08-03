import React from "react";
import styled from "styled-components";

//IMPORTED COMPONENTS
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";
import { handleOnSubmit } from "../handlers";

const { primary } = COLORS;

const Submit = () => {
  const { textValue, numLettersLeft } = React.useContext(CurrentUserContext);
  return (
    <Button
      onClick={() => {
        handleOnSubmit(textValue);
      }}
      disabled={numLettersLeft > 0 ? false : true}
    >
      Quack!
    </Button>
  );
};

const Button = styled.button`
  align-self: flex-end;
  border: none;
  padding: 0.5rem;
  width: 100px;
  height: 50px;
  font-size: 1.25rem;
  cursor: pointer;
  color: #fff;
  background-color: ${primary};
  border-radius: 18px;
  &&:disabled {
    background-color: #999;
  }
`;

export default Submit;
