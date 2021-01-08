import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = ({ title, subtitle, children }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const Wrapper = styled.section.attrs({
  className: "mx-5 px-5",
})`
  color: ${(props) => props.theme.fontColor};
`;

const Title = styled.h3.attrs({
  className: "m-0",
})``;

const Subtitle = styled.h6.attrs({
  className: "mt-3 mb-0 h5",
})``;

const ChildrenWrapper = styled.div.attrs({
  className: "mt-4",
})``;

export default Section;
