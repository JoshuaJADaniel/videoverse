import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "components/main/section/Section";
import Separator from "components/common/Separator";
import Badge from "components/common/Badge";

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
          <ProfilePhoto
            style={{ backgroundImage: `url(${posterImageHighRes})` }}
          />
        </ProfilePhotoWrapper>
        <ProfileDetailsWrapper>
          <ProfileName>{name}</ProfileName>
          <Badge>Gender: {gender}</Badge>
          {placeOfBirth && <Badge>Born: {placeOfBirth}</Badge>}
          {birthday && <Badge>Born on: {birthday}</Badge>}
          {deathday && <Badge>Died on: {deathday}</Badge>}
          {department && <Badge>Department: {department}</Badge>}
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

const BiographyText = styled.p.attrs({
  className: "mt-3",
})`
  line-height: 1.7;
  white-space: pre-line;
`;

export default PersonSection;
