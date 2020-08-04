import React from "react";
import dateFormat from "dateformat";
import { useHistory, Link } from "react-router-dom";

//IMPORTED COMPONENTS
import TweetActions from "../TweetActions";
import { Tweet, TweetInfo, Avatar, Status, Media, Clickable } from "../Feed";
import RetweetBanner from "../RetweetBanner";

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
            <RetweetBanner tweet={tweet} />
            <Avatar
              src={
                tweet.retweetFrom
                  ? tweet.retweetFrom.avatarSrc
                  : tweet.author.avatarSrc
              }
            />
            <TweetInfo>
              <span>
                {tweet.retweetFrom
                  ? tweet.retweetFrom.displayName
                  : tweet.author.displayName}
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
