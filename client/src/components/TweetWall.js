import React from "react";

import styled from "styled-components";

//renders all tweets on the home page
const TweetWall = ({ tweetFeed }) => {
  return tweetFeed.map((tweet) => {
    return (
      <Tweet>
        <Avatar src={tweet.author.avatarSrc} />
        <TweetInfo>
          <span>{tweet.author.displayName}</span>
          {tweet.author.handle && <span>@{tweet.author.handle}</span>}
        </TweetInfo>
        <Status>{tweet.status}</Status>
        {tweet.media[0] && <Media src={tweet.media[0].url} />}
      </Tweet>
    );
  });
};

const Tweet = styled.div`
  margin: 2rem 0;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: thin solid grey;
`;
const TweetInfo = styled.div`
  display: flex;
  span {
    margin: 0 1rem;
  }
  span:first-child {
    font-size: 1.25rem;
    font-weight: bold;
  }
  span:nth-child(2) {
    opacity: 0.8;
  }
`;
const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
const Status = styled.span`
  font-size: 1.5rem;
`;
const Media = styled.img`
  max-height: 600px;
  max-width: 800px;
  border-radius: 12px;
  object-fit: cover;
`;
export default TweetWall;
