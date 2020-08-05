import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import dateFormat from "dateformat";

//"1214624813723136002" - tweet id for testing purposes

//IMPORTED COMPONENTS
import TweetActions from "./TweetActions";
import { Tweet, Avatar, Status, Media } from "../HomeFeed";
import Load from "../Load";
import ErrorScreen from "../ErrorScreen";

const BigTweet = () => {
  const tweetId = useParams().tweetId; //storing the tweetId from the url params
  const [tweet, setTweet] = React.useState(null);
  const [tweetPageStatus, setTweetPageStatus] = React.useState("loading");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => {
        setTweet(data);
        setTweetPageStatus("idle");
      })
      .catch((err) => setTweetPageStatus("error"));
  }, []);

  return (
    <>
      {tweetPageStatus === "idle" && (
        <Tweet>
          <TopInfo>
            <Avatar src={tweet.tweet.author.avatarSrc} />
            <Names>
              <span>{tweet.tweet.author.displayName}</span>
              <span>@{tweet.tweet.author.handle}</span>
            </Names>
          </TopInfo>
          <Status>{tweet.tweet.status}</Status>
          {tweet.tweet.media[0] && <Media src={tweet.tweet.media[0].url} />}
          <span>
            {dateFormat(tweet.tweet.timestamp, "hh:MM TT - mmm dd yyyy")}-Quack
            Web App
          </span>
          <TweetActions />
        </Tweet>
      )}
      {tweetPageStatus === "loading" && <Load />}
      {tweetPageStatus === "error" && <ErrorScreen />}
    </>
  );
};

const TopInfo = styled.div`
  display: flex;
`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BigTweet;
