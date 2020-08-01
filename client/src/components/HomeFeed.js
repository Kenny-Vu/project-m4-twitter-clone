import React, { useEffect } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import TweetWall from "./TweetWall";
import { COLORS } from "../constants";

const { primary } = COLORS;

const HomeFeed = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [tweetFeed, setTweetFeed] = React.useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <Wrapper>
      <h1>Home</h1>
      <UserPost>
        <img src={currentUser.avatarSrc} alt={currentUser.handle} />
        <textarea placeholder="What's happening?"></textarea>
        <button>Quack!</button>
      </UserPost>
      {tweetFeed ? <TweetWall tweetFeed={tweetFeed} /> : <div>Loading...</div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex:
flex-direction:column;
width: 90%;
margin: 1rem;


h1 {
  margin:1rem 0;
  box-shadow: 0 2px 2px -2px gray;
}
`;

const UserPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  border-bottom: thin grey solid;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  textarea {
    height: 100px;
    width: 100%;
    resize: none;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  button {
    align-self: flex-end;
    border: none;
    padding: 0.5rem;
    width: 100px;
    height: 50px;
    font-size: 1.25rem;
    color: #fff;
    background-color: ${primary};
    border-radius: 18px;
  }
`;

export default HomeFeed;
