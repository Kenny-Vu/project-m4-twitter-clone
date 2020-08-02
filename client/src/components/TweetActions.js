import React from "react";
import styled from "styled-components";
import { FiShare2, FiHeart, FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa";

const TweetActions = () => {
  return (
    <Bar>
      <Action>
        <FiMessageCircle />
      </Action>
      <Action>
        <FaRetweet />
      </Action>
      <Action>
        <FiHeart />
      </Action>
      <Action>
        <FiShare2 />
      </Action>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;
const Action = styled.button`
  border: none;
  background-color: #fff;
  padding: 0.25rem;
  font-size: 2rem;
  cursor: pointer;
`;

export default TweetActions;
