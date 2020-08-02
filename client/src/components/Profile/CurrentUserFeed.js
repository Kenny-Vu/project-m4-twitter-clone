import React from "react";
import dateFormat from "dateformat";

import TweetActions from "../TweetActions";
import { Tweet, TweetInfo, Avatar, Status, Media } from "../Feed";

const CurrentUserFeed = ({ userFeed }) => {
  return userFeed.map((tweet) => {
    return (
      <Tweet>
        <Avatar src={tweet.author.avatarSrc} />
        <TweetInfo>
          <span>{tweet.author.displayName}</span>
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

export default CurrentUserFeed;
