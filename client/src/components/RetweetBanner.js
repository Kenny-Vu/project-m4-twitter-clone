import React from "react";

import { FaRetweet } from "react-icons/fa";

const RetweetBanner = ({ tweet }) => {
  console.log(tweet.retweetFrom);
  return (
    <>
      {tweet.retweetFrom && (
        <div>
          <FaRetweet />
          {tweet.author.handle}
        </div>
      )}
    </>
  );
};

export default RetweetBanner;
