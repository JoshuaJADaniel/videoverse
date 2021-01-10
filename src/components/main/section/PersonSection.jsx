import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "components/main/section/Section";
import Separator from "components/common/Separator";

const PersonSection = ({ personData }) => {
  const {
    name,
    gender,
    biography,
    birthday,
    deathday,
    department,
    placeOfBirth,
    posterImageHighRes,
  } = personData;

  return (
    <Section>
      <BootstrapRow>
        <ProfilePhotoWrapper>
          <ProfilePhoto posterImage={posterImageHighRes} />
        </ProfilePhotoWrapper>
        <ProfileDetailsWrapper>
          <ProfileName>{name}</ProfileName>
          <ProfileDetail>Gender: {gender}</ProfileDetail>
          {placeOfBirth && <ProfileDetail>Born: {placeOfBirth}</ProfileDetail>}
          {birthday && <ProfileDetail>Born on: {birthday}</ProfileDetail>}
          {deathday && <ProfileDetail>Died on: {deathday}</ProfileDetail>}
          {department && (
            <ProfileDetail>Department: {department}</ProfileDetail>
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
    gender: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    deathday: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    placeOfBirth: PropTypes.string.isRequired,
    posterImageHighRes: PropTypes.string.isRequired,
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
  background-image: url(${(props) => props.posterImage});
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
