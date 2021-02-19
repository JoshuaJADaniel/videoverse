import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import getGeneric from "requests/getGeneric";
import resolveLoading from "utils/resolveLoading";
import { selectPropTypes } from "data/propTypeValues";

import Spacer from "components/Spacer";
import Pagination from "components/Pagination";
import SectionMedia from "components/SectionMedia";
import SectionPeople from "components/SectionPeople";
import SelectDropdown from "components/SelectDropdown";
import SectionMessage from "components/SectionMessage";
import Section from "components/Section";

import Template from "templates/Template";

const BrowseGeneral = ({
  title,
  query,
  pageName,
  pageLink,
  requestLink,
  extractDetails,
  sortByOptions,
  defaultSort,
  currentPage,
  media,
}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(750);
  const [generalMedia, setGeneralMedia] = useState([]);
  const [selectedSort, setSelectedSort] = useState(defaultSort);

  const paginationData = {
    startPage: 1,
    endPage: totalPages,
    currentPage: currentPage,
    eventHandler: (page) => {
      history.push(createUrl(pageLink, page, query));
    },
  };

  const paginationWithoutTitle = <Pagination {...paginationData} />;
  const paginationWithTitle = <Pagination title={title} {...paginationData} />;

  useEffect(() => {
    const queryParameters = ["vote_count.gte=100", `page=${currentPage}`];

    if (sortByOptions && selectedSort) {
      queryParameters.push(`sort_by=${selectedSort.value}`);
    }

    if (query) {
      queryParameters.push(`query=${encodeURIComponent(query)}`);
    }

    getGeneric(
      requestLink,
      ({ results, total_pages }) => {
        if (total_pages) {
          setTotalPages(total_pages);
        }

        if (results) {
          setGeneralMedia(extractDetails(results));
        }

        resolveLoading(setLoading);
      },
      queryParameters,
      history
    );
  }, [currentPage, selectedSort, query]);

  return (
    <Template loading={loading} page={pageName} searchText={query}>
      {generalMedia.length ? (
        <>
          <Spacer />
          {paginationWithTitle}
          {!sortByOptions || !selectedSort ? <Spacer /> : <Spacer space={20} />}
          {sortByOptions && selectedSort && (
            <Section>
              <SelectDropdown
                options={sortByOptions}
                defaultValue={defaultSort}
                onChange={(data) => setSelectedSort(data)}
              />
              <Spacer />
            </Section>
          )}
          {media ? (
            <SectionMedia title="" mediaData={generalMedia} responsive />
          ) : (
            <SectionPeople title="" peopleData={generalMedia} responsive />
          )}
          {paginationWithoutTitle}
        </>
      ) : (
        <SectionMessage
          title="Oops!"
          subtitle="Looks like there are no results..."
        />
      )}
    </Template>
  );
};

BrowseGeneral.propTypes = {
  media: PropTypes.bool,
  query: PropTypes.string,
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageName: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
  requestLink: PropTypes.string.isRequired,
  extractDetails: PropTypes.func.isRequired,
  sortByOptions: PropTypes.arrayOf(selectPropTypes),
  selectedSort: selectPropTypes,
};

const parsePageNumber = (history, pageNumber, pageLink, query) => {
  if (!/^\d+$/.test(pageNumber)) {
    history.replace(createUrl(pageLink, 1, query));
    return 1;
  }

  return parseInt(pageNumber);
};

const createUrl = (pageLink, pageNumber, query) =>
  `/${pageLink}/${pageNumber}${(query && `?s=${query}`) || ""}`;

export default BrowseGeneral;
