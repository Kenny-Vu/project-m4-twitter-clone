import React from "react";
import dateFormat from "dateformat";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//IMPORTED COMPONENTS
import { CurrentUserContext } from "./CurrentUserContext";
import TweetActions from "./TweetActions";

//renders all tweets on the home page
const Feed = ({ tweetFeed }) => {
  const history = useHistory();

  //function to send user to specific tweet page
  const handleGoToTweet = (tweetId) => {
    history.push(`/tweet/${tweetId}`);
    history.goForward();
  };

  return tweetFeed.map((tweet) => {
    return (
      <Tweet key={tweet.id} onClick={() => handleGoToTweet(tweet.id)}>
        <Avatar src={tweet.author.avatarSrc} />
        <TweetInfo>
          <span>
            <a href={`/${tweet.author.handle}`}>{tweet.author.displayName}</a>
          </span>
          <span>@{tweet.author.handle}</span>
          <span>{dateFormat(tweet.timestamp, "mmm dd")}</span>
        </TweetInfo>
        <Status>{tweet.status}</Status>
        {tweet.media[0] && <Media src={tweet.media[0].url} />}
        <TweetActions />
      </Tweet>
    );
  });
};

export const Tweet = styled.div`
  margin: 2rem 0;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: thin solid #d3d3d3;
  &&:active {
    border: blue solid;
  }
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const TweetInfo = styled.div`
  span:first-child {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 1rem 0 0;
  }
  span:nth-child(2),
  span:nth-child(3) {
    opacity: 0.8;
    margin-right: 0.25rem;
  }
  span a {
    text-decoration: none;
    color: black;
  }
`;
export const Status = styled.span`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;
export const Media = styled.img`
  max-height: 600px;
  max-width: 800px;
  border-radius: 12px;
  object-fit: cover;
`;
export default Feed;
