import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Separator = ({ verticalSpace, line }) => (
  <Wrapper padding={verticalSpace}>{line && <HorizontalLine />}</Wrapper>
);

Separator.propTypes = {
  verticalSpace: PropTypes.number,
  line: PropTypes.bool,
};

const Wrapper = styled.div`
  padding-bottom: ${(props) => props.padding}px;
`;

const HorizontalLine = styled.hr`
  margin: 0;
  padding: 0;
  border-bottom: 2px solid rgba(200, 200, 200, 0.4);
`;

export default Separator;
