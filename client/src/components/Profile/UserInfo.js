import React from "react";
import styled from "styled-components";

import { GoLocation } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";

import { COLORS } from "../../constants";

const { borderColor } = COLORS;

const UserInfo = ({ userProfile }) => {
  const {
    displayName,
    handle,
    location,
    joined,
    bio,
    isBeingFollowedByYou,
    isFollowingYou,
    numFollowers,
    numFollowing,
    numLikes,
  } = userProfile;
  userProfile && console.log(userProfile);
  return (
    <Wrapper>
      <MainInfo>
        <DisplayName>{displayName}</DisplayName>
        <HandleDiv>
          <span>@{handle}</span>
          <span>{isFollowingYou ? "Follows you" : "Isn't following you"}</span>
        </HandleDiv>
      </MainInfo>
      <SubInfoContainer>
        <span>
          <GoLocation />
          {location}
        </span>
        <span>
          <FiCalendar />
          {`Joined ${joined}`}
        </span>
      </SubInfoContainer>
      <SubInfoContainer>
        <span>{`${numFollowing} Following`}</span>
        <span>{`${numFollowers} Followers`}</span>
      </SubInfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainInfo = styled.div`
  margin-bottom: 1rem;
`;
const HandleDiv = styled.div`
  span {
    opacity: 0.8;
    margin-right: 1rem;
  }
  span:last-child {
    padding: 0.25rem;
    background-color: ${borderColor};
    border-radius: 16px;
  }
`;
const SubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  span {
    width: calc(100% / 2);
    opacity: 0.8;
    margin: 0.5rem 0;
  }
`;
const DisplayName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export default UserInfo;
