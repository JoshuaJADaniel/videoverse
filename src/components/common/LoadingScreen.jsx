import React from "react";

const LoadingScreen = () => (
  <Wrapper>
    <Loader />
    <SrSpan>Loading..</SrSpan>
  </Wrapper>
);

const Wrapper = styled.div.attrs({
  className: "d-flex justify-content-center align-items-center",
})``;

const Loader = styled.div({
  className: "spinner-border",
  role: "status",
})``;

const SrSpan = styled.span.attrs({
  className: "sr-only",
})``;

export default LoadingScreen;
