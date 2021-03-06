import React, { useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  const [tweetFeed, setTweetFeed] = React.useState(null);

  //States used by Submit and Textbox files
  const [textValue, setTextValue] = React.useState("");
  const [numLettersLeft, setNumLettersLeft] = React.useState(280);

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  useEffect(() => {
    fetch("/api/me/profile")
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data.profile);
        data.profile ? setStatus("idle") : setStatus("loading");
      })
      .catch((err) => setStatus("error"));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
        textValue,
        setTextValue,
        numLettersLeft,
        setNumLettersLeft,
        tweetFeed,
        setTweetFeed,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
