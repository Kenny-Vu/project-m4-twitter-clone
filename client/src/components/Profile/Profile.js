import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../../constants";

//IMPORTED COMPONENTS
import Load from "../Load";
import CurrentUserFeed from "./CurrentUserFeed";
import UserInfo from "./UserInfo";

const { primary } = COLORS;

const Profile = () => {
  //STATES
  const [userProfile, setUserProfile] = useState(null);
  const [userFeed, setUserFeed] = useState(null);
  ///
  const { profileId } = useParams(); //storing the user handle from URL params

  useEffect(() => {
    //fetching the profile that matches the handle from the URL
    fetch(`/api/${profileId}/profile`)
      .then((response) => response.json())
      .then((data) => {
        setUserProfile(data.profile);
      });
    //fetches all tweets made by this user
    fetch(`/api/${profileId}/feed`)
      .then((response) => response.json())
      .then((data) => {
        return data.tweetIds.map((tweetId) => {
          return data.tweetsById[`${tweetId}`];
        });
      })
      .then((feedback) => setUserFeed(feedback));
  }, []);

  return userProfile ? (
    <Wrapper>
      <div>
        <Banner src={userProfile.bannerSrc} />
        <AvatarWrapper>
          <AvatarImg src={userProfile.avatarSrc} alt={userProfile.handle} />
          {userProfile.isBeingFollowedByYou ? (
            <Button>Following</Button>
          ) : (
            <Button>Follow</Button>
          )}
        </AvatarWrapper>
        <UserInfo userProfile={userProfile} />
      </div>
      {/* Passign the userFeed state as prop only once it isn't null */}
      {userFeed ? <CurrentUserFeed userFeed={userFeed} /> : <Load />}
    </Wrapper>
  ) : (
    <Load />
  );
};

//STYLED COMPONENTS
const Wrapper = styled.div`
display:flex:
flex-direction:column;
width: 70vw;
border-right: solid #D3D3D3;
border-left: solid #d3d3d3;
padding: 1rem;
`;

const AvatarWrapper = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 1rem;
  border-bottom: solid thin #d3d3d3;
`;
const AvatarImg = styled.img`
  border: white solid 4px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const Banner = styled.img`
  display: block;
  max-height: 450px;
  width: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem;
  width: 100px;
  height: 50px;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${primary};
  border-radius: 18px;
  cursor: pointer;
`;

export default Profile;
