import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import dateFormat from "dateformat";

//"1214624813723136002" - tweet id for testing purposes

//IMPORTED COMPONENTS
import TweetActions from "./TweetActions";
import { Tweet, Avatar, Status, Media } from "./Feed";
import Load from "./Load";

const BigTweet = () => {
  const tweetId = useParams().tweetId; //storing the tweetId from the url params
  const [tweet, setTweet] = React.useState(null);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => setTweet(data));
  }, []);

  return tweet ? (
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
        {dateFormat(tweet.tweet.timestamp, "hh:MM TT - mmm dd yyyy")}-Quack Web
        App
      </span>
      <TweetActions />
    </Tweet>
  ) : (
    <Load />
  );
};

const TopInfo = styled.div`
  display: flex;
`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
`;
{
  /* <Tweet key={tweet.id}>
  <Avatar src={tweet.author.avatarSrc} />
  <TweetInfo>
    <span>{tweet.author.displayName}</span>
    <span>@{tweet.author.handle}</span>
    <span>{dateFormat(tweet.timestamp, "mmm dd")}</span>
  </TweetInfo>
  <Status>{tweet.status}</Status>
  {tweet.media[0] && <Media src={tweet.media[0].url} />}
  <TweetActions />
</Tweet>; */
}

export default BigTweet;
