import React, { useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  let test = "quack!";
  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  useEffect(() => {
    fetch("/api/me/profile")
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data.profile);
        currentUser ? setStatus("idle") : setStatus("loading");
      });
    return setCurrentUser(currentUser);
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, test }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
