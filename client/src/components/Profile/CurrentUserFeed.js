import React from "react";
import dateFormat from "dateformat";
import { useHistory } from "react-router-dom";

import TweetActions from "../TweetActions";
import { Tweet, TweetInfo, Avatar, Status, Media, Clickable } from "../Feed";

const CurrentUserFeed = ({ userFeed }) => {
  const history = useHistory();

  //function to send user to specific tweet page
  const handleGoToTweet = (tweetId) => {
    history.push(`/tweet/${tweetId}`);
    history.goForward();
  };

  return userFeed.map((tweet) => {
    return (
      <>
        <Tweet key={tweet.id}>
          <Clickable
            aria-label="view-tweet"
            tabIndex="0"
            onClick={() => handleGoToTweet(tweet.id)}
          >
            <Avatar src={tweet.author.avatarSrc} />
            <TweetInfo>
              <span>
                <a href={`/${tweet.author.handle}`}>
                  {tweet.author.displayName}
                </a>
              </span>
              <span>@{tweet.author.handle}</span>
              <span>{dateFormat(tweet.timestamp, "mmm dd")}</span>
            </TweetInfo>
            <Status>{tweet.status}</Status>
          </Clickable>
          {tweet.media[0] && <Media src={tweet.media[0].url} />}
          <TweetActions tweetId={tweet.id} isLiked={tweet.isLiked} />
        </Tweet>
      </>
    );
  });
};

export default CurrentUserFeed;
