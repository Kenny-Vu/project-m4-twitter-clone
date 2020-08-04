import React, { useEffect } from "react";
import styled from "styled-components";

//IMPORTED COMPONENTS
import { CurrentUserContext, CurrentUserProvider } from "./CurrentUserContext";
import Feed from "./Feed";
import Load from "./Load";
import Submit from "./Submit";
import TextBox from "./TextBox";
import ErrorScreen from "./ErrorScreen";

const HomePage = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { tweetFeed, setTweetFeed } = React.useContext(CurrentUserContext);
  const [homeFeedStatus, setHomeFeedStatus] = React.useState("loading"); //state used render error screen if needed

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
        setHomeFeedStatus("Idle");
      })
      .catch((err) => setHomeFeedStatus("error"));
  }, []);

  return (
    <Wrapper>
      <h1>Home</h1>
      <UserPost>
        <Divider>
          <AvatarImg src={currentUser.avatarSrc} alt={currentUser.handle} />
          <TextBox placeholder="What's happening?" />
        </Divider>
        <Submit>Quack!</Submit>
      </UserPost>
      {homeFeedStatus === "loading" && <Load />}
      {homeFeedStatus === "error" && <ErrorScreen />}
      {tweetFeed && <Feed tweetFeed={tweetFeed} />}
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

export default HomePage;
