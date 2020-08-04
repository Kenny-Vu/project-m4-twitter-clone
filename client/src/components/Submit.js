import React, { useEffect } from "react";
import styled from "styled-components";

//IMPORTED COMPONENTS
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";

const { primary } = COLORS;

const Submit = () => {
  const {
    textValue,
    numLettersLeft,
    setTweetFeed,
    TweetFeed,
  } = React.useContext(CurrentUserContext);

  //Function to refetch home feed
  const handleAfterPublishTweet = () => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        //return an array with the tweets in the right order using tweetIds' array
        return data.tweetIds.map((tweetId) => {
          return data.tweetsById[`${tweetId}`];
        });
      })
      .then((answer) => {
        setTweetFeed(answer);
      });
  };

  const handleOnSubmit = () => {
    fetch("/api/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: textValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleAfterPublishTweet(); //this rerenders the home feed but the loading animation doesn't appear
      });
  };

  return (
    <Button
      onClick={() => {
        handleOnSubmit();
      }}
      disabled={numLettersLeft > 0 ? false : true} //disables button if user exceeds letter count
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
