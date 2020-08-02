import React, { useEffect } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import Feed from "./Feed";
import { COLORS } from "../constants";
import Load from "./Load";

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
        <Divider>
          <AvatarImg src={currentUser.avatarSrc} alt={currentUser.handle} />
          <textarea placeholder="What's happening?"></textarea>
        </Divider>
        <button>Quack!</button>
      </UserPost>
      {tweetFeed ? <Feed tweetFeed={tweetFeed} /> : <Load />}
    </Wrapper>
  );
};

//STYLING
const Wrapper = styled.div`
display:flex:
flex-direction:column;
margin: 1rem;
border-right: solid #D3D3D3;
border-left: solid #d3d3d3;
padding: 1rem;

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
  textarea {
    height: 300px;
    width: 100%;
    resize: none;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
  }
  textarea:focus {
    outline: none;
  }
  button {
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
  }
`;
const Divider = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

export const AvatarImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export default HomeFeed;
