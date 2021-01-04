import React from "react";
import styled from "styled-components";

const LoadingScreen = () => (
  <Wrapper>
    <Loader />
    <SrSpan>Loading..</SrSpan>
  </Wrapper>
);

const Wrapper = styled.div.attrs({
  className: "d-flex justify-content-center align-items-center",
})`
  height: 100vh;
  background: ${(props) => props.theme.background.level3};
`;

const Loader = styled.div.attrs({
  className: "spinner-border",
  role: "status",
})`
  width: 60px;
  height: 60px;
  color: ${(props) => props.theme.primaryColor};
`;

const SrSpan = styled.span.attrs({
  className: "sr-only",
})``;

export default LoadingScreen;
