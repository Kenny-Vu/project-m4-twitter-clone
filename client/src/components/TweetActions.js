import React from "react";
import styled from "styled-components";
import { FiShare2, FiHeart, FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa";

const TweetActions = ({ tweetId, isLiked, numLikes }) => {
  const [tweetLiked, setTweetLiked] = React.useState(isLiked);
  const [numOfLikes, setNumOfLikes] = React.useState(numLikes);
  const handleLike = (event) => {
    if (!tweetLiked) {
      fetch(`api/tweet/${tweetId}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: true }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTweetLiked(!tweetLiked);
          setNumOfLikes(numOfLikes + 1);
        });
    } else {
      fetch(`api/tweet/${tweetId}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: false }),
      })
        .then((response) => response.json())
        .then((data) => {
          setNumOfLikes(numOfLikes - 1);
          setTweetLiked(!tweetLiked);
        });
    }
  };

  return (
    <Bar>
      <div>
        <Action>
          <FiMessageCircle />
        </Action>
      </div>
      <div>
        <Action>
          <FaRetweet />
        </Action>
      </div>
      <div>
        <Action onClick={handleLike}>
          <FiHeart />
        </Action>
        <span>{numOfLikes}</span>
      </div>
      <div>
        <Action>
          <FiShare2 />
        </Action>
      </div>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: thin solid #d3d3d3;
`;

const Action = styled.button`
  border: none;
  background-color: #fff;
  padding: 0.25rem;
  font-size: 2rem;
  cursor: pointer;
`;

export default TweetActions;
