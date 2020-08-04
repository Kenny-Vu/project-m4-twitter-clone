import React from "react";
import dateFormat from "dateformat";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

//IMPORTED COMPONENTS
import TweetActions from "./TweetActions";
import RetweetBanner from "./RetweetBanner";

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
      <>
        <RetweetBanner tweet={tweet} />
        <Tweet key={tweet.id}>
          <Clickable
            aria-label="view-tweet"
            tabIndex="0"
            onClick={() => handleGoToTweet(tweet.id)}
            onKeyPress={(e) => e.key === "Enter" && handleGoToTweet(tweet.id)}
          >
            <Avatar
              src={
                tweet.retweetFrom
                  ? tweet.retweetFrom.avatarSrc
                  : tweet.author.avatarSrc
              }
            />
            <TweetInfo>
              <span>
                <Link
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  to={`/${tweet.author.handle}`}
                >
                  {tweet.retweetFrom
                    ? tweet.retweetFrom.displayName
                    : tweet.author.displayName}
                </Link>
              </span>
              <span>@{tweet.author.handle}</span>
              <span>{dateFormat(tweet.timestamp, "mmm dd")}</span>
            </TweetInfo>
            <Status>{tweet.status}</Status>
          </Clickable>
          {tweet.media[0] && <Media src={tweet.media[0].url} />}
          <TweetActions
            tweetId={tweet.id}
            isLiked={tweet.isLiked}
            numLikes={tweet.numLikes}
          />
        </Tweet>
      </>
    );
  });
};

export const Tweet = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const Clickable = styled.div`
  &&:focus {
    border: blue solid;
  }
  z-index: 1;
`;

export const TweetInfo = styled.div`
  z-index: 2;
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
