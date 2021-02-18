import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import getGeneric from "requests/getGeneric";
import resolveLoading from "utils/resolveLoading";

import Spacer from "components/Spacer";
import Pagination from "components/Pagination";
import SectionMedia from "components/SectionMedia";
import SectionPeople from "components/SectionPeople";

import Template from "templates/Template";

const BrowseGeneral = ({
  title,
  pageName,
  pageLink,
  requestLink,
  extractDetails,
  media,
}) => {
  const { page } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(750);
  const [popularGeneral, setPopularGeneral] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parsePageNumber(history, page, pageLink)
  );

  const paginationData = {
    startPage: 1,
    endPage: totalPages,
    currentPage: currentPage,
    eventHandler: (page) => {
      setCurrentPage(page);
      history.replace(`/${pageLink}/${page}`);
    },
  };

  const paginationWithoutTitle = <Pagination {...paginationData} />;
  const paginationWithTitle = <Pagination title={title} {...paginationData} />;

  useEffect(() => {
    getGeneric(
      requestLink,
      ({ results, total_pages }) => {
        if (total_pages) {
          setTotalPages(total_pages);
        }

        if (results) {
          setPopularGeneral(extractDetails(results));
          resolveLoading(setLoading);
        }
      },
      [`page=${currentPage}`],
      history
    );
  }, [currentPage]);

  return (
    <Template loading={loading} page={pageName}>
      <Spacer />
      {paginationWithTitle}
      <Spacer />

      {media ? (
        <SectionMedia title="" mediaData={popularGeneral} responsive />
      ) : (
        <SectionPeople title="" peopleData={popularGeneral} responsive />
      )}

      {paginationWithoutTitle}
    </Template>
  );
};

BrowseGeneral.propTypes = {
  media: PropTypes.bool,
  title: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  requestLink: PropTypes.string.isRequired,
  extractDetails: PropTypes.func.isRequired,
};

const parsePageNumber = (history, pageNumber, pageLink) => {
  if (!/^\d+$/.test(pageNumber)) {
    history.replace(`${pageLink}/1`);
    return 1;
  }

  return parseInt(pageNumber);
};

export default BrowseGeneral;
