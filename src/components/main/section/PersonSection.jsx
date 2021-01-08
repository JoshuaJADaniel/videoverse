import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import getGenderText from "utils/getGenderText";
import { getPosterImageUrl } from "/requests/getTmdbEndpointUrls";

import Section from "components/main/section/Section";
import Separator from "components/common/Separator";
import getProfilePlaceholder from "../../../utils/getProfilePlaceholder";

const PersonSection = ({ personData }) => {
  const {
    name,
    gender,
    biography,
    birthday,
    deathday,
    profile_path,
    place_of_birth,
    known_for_department,
  } = personData;

  const memoizedImageUrl = useMemo(
    () =>
      (profile_path && getPosterImageUrl(profile_path, true)) ||
      getProfilePlaceholder(gender, true),
    [personData.profile_path]
  );

  return (
    <Section>
      <BootstrapRow>
        <ProfilePhotoWrapper>
          <ProfilePhoto imageUrl={memoizedImageUrl} />
        </ProfilePhotoWrapper>
        <ProfileDetailsWrapper>
          <ProfileName>{name}</ProfileName>
          <ProfileDetail>Gender: {getGenderText(gender)}</ProfileDetail>
          {place_of_birth && (
            <ProfileDetail>Born: {place_of_birth}</ProfileDetail>
          )}
          {birthday && <ProfileDetail>Born on: {birthday}</ProfileDetail>}
          {deathday && <ProfileDetail>Died on: {deathday}</ProfileDetail>}
          {known_for_department && (
            <ProfileDetail>Department: {known_for_department}</ProfileDetail>
          )}
          <Separator verticalSpace={10} />
          <Separator line />
          <BiographyText>
            {biography || `No biography found for ${name}`}
          </BiographyText>
        </ProfileDetailsWrapper>
      </BootstrapRow>
    </Section>
  );
};

PersonSection.propTypes = {
  personData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.number,
    biography: PropTypes.string,
    birthday: PropTypes.string,
    deathday: PropTypes.string,
    profile_path: PropTypes.string,
    place_of_birth: PropTypes.string,
    known_for_department: PropTypes.string,
  }).isRequired,
};

const BootstrapRow = styled.div.attrs({
  className: "row",
})``;

const ProfilePhotoWrapper = styled.div.attrs({
  className: "col-3",
})``;

const ProfilePhoto = styled.div`
  height: 0;
  width: auto;
  padding-bottom: 150%;
  border-radius: 5px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
`;

const ProfileDetailsWrapper = styled.div.attrs({
  className: "col-9",
})``;

const ProfileName = styled.h1.attrs({
  className: "mb-3",
})`
  font-weight: bold;
`;

const ProfileDetail = styled.h3.attrs({
  className: "px-3 py-2 mr-3 badge",
})`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.profileBadgeBackground};
  transition: none;
`;

const BiographyText = styled.p.attrs({
  className: "mt-3",
})`
  line-height: 1.7;
  white-space: pre-line;
`;

export default PersonSection;
