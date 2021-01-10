import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = ({ children }) => <BadgeWrapper>{children}</BadgeWrapper>;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

const BadgeWrapper = styled.h3.attrs({
  className: "px-3 py-2 mr-3 badge",
})`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.defaultBadgeBackground};
  transition: none;
`;

export default Badge;
