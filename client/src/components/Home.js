import React, { useEffect } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

const Home = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  return <div>{currentUser.handle}</div>;
};

export default Home;
