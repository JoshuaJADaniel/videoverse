import React from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Loading from "components/Loading";
import Sidebar from "components/Sidebar";
import MainContainer from "components/MainContainer";

const Template = ({ page, loading, children }) => (
  <>
    <Sidebar page={page} />
    <MainContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </MainContainer>
  </>
);

Template.propTypes = {
  page: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Template;
