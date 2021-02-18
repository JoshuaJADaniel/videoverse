import React from "react";
import PropTypes from "prop-types";
import Section from "components/Section";

import styles from "./Pagination.module.scss";

const Pagination = ({
  title,
  startPage,
  endPage,
  currentPage,
  eventHandler,
}) => {
  let pageSpread = 3;
  let paginationButtons = [];
  let paginationEnd = Math.min(endPage, currentPage + pageSpread);
  let paginationStart = Math.max(startPage, currentPage - pageSpread);

  const createButton = (page) => (
    <button
      key={`pagination-${page}`}
      className={styles.paginationButton}
      data-info={
        (page === currentPage && "active") ||
        `offset=${Math.abs(currentPage - page)}`
      }
      onClick={() => eventHandler(page)}
    >
      {page}
    </button>
  );

  for (let page = paginationStart; page <= paginationEnd; ++page) {
    paginationButtons.push(createButton(page));
  }

  const paginationComponent = (
    <div className={styles.paginationWrapper}>
      {paginationStart !== startPage && (
        <>
          {createButton(startPage)}
          <p>...</p>
        </>
      )}

      {paginationButtons}

      {paginationEnd !== endPage && (
        <>
          <p>...</p>
          {createButton(endPage)}
        </>
      )}
    </div>
  );

  return title ? (
    <Section>
      <div className={styles.paginationWithTitle}>
        <h1>{title}</h1>
        {paginationComponent}
      </div>
    </Section>
  ) : (
    <>{paginationComponent}</>
  );
};

Pagination.propTypes = {
  title: PropTypes.string,
  startPage: PropTypes.number.isRequired,
  endPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default Pagination;
