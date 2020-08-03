import React, { useEffect } from "react";
import styled from "styled-components";

//IMPORTED COMPONENTS
import { CurrentUserContext, CurrentUserProvider } from "./CurrentUserContext";

const TextBox = () => {
  const {
    textValue,
    setTextValue,
    numLettersLeft,
    setNumLettersLeft,
  } = React.useContext(CurrentUserContext);

  const [textColor, setTextColor] = React.useState("black"); //State checks what color text should be

  const handleTyping = (event) => {
    setTextValue(event.target.value);
    setNumLettersLeft(280 - event.target.value.length);
    console.log(numLettersLeft);
  };

  //Function to set color of text
  const handleTextColor = () => {
    if (numLettersLeft > 56) {
      setTextColor("black");
    }
    if (numLettersLeft < 56) {
      setTextColor("yellow");
    }
    if (numLettersLeft < 0) {
      setTextColor("red");
    }
  };

  return (
    <>
      <StyledTextBox
        placeholder="What's happening?"
        value={textValue}
        onChange={(event) => {
          handleTyping(event);
          handleTextColor();
        }}
        style={{ color: textColor }}
      ></StyledTextBox>
      <div>{numLettersLeft}</div>
    </>
  );
};

const StyledTextBox = styled.textarea`
  height: 300px;
  width: 100%;
  resize: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;

  &&:focus {
    outline: none;
  }
`;

export default TextBox;
