import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/main/section/Section";

const PaginationSection = ({
  id,
  minPage,
  maxPage,
  currentPage,
  pageSpread,
}) => {
  const paginationSpread = pageSpread || 3;

  let paginationButtons = [];
  let paginationEnd = currentPage + paginationSpread;
  let paginationStart = currentPage - paginationSpread;

  if (paginationStart < minPage) {
    paginationEnd += Math.abs(paginationStart - minPage);
    paginationStart = minPage;
  } else if (paginationEnd > maxPage) {
    paginationStart -= Math.abs(paginationEnd - maxPage);
    paginationEnd = maxPage;
  }

  for (let page = paginationStart; page <= paginationEnd; ++page) {
    paginationButtons.push(
      <li
        key={`${id}-pagination-${page}`}
        className={`page-item ${page === currentPage && "active"}`}
      >
        <a className="page-link" href={page}>
          {page}
        </a>
      </li>
    );
  }

  return (
    <Section>
      <div className="d-flex justify-content-center">
        <Wrapper>
          <ul className="pagination m-0">
            <li
              className={`page-item ${currentPage === minPage && "disabled"}`}
            >
              <a className="page-link" href={currentPage - 1}>
                Previous
              </a>
            </li>
            {paginationButtons}
            <li
              className={`page-item ${currentPage === maxPage && "disabled"}`}
            >
              <a className="page-link" href={currentPage + 1}>
                Next
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    </Section>
  );
};

PaginationSection.propTypes = {
  id: PropTypes.string.isRequired,
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSpread: PropTypes.number,
};

const Wrapper = styled.nav`
  & a.page-link,
  & .page-item.disabled a.page-link {
    color: ${(props) => props.theme.paginationColor};
    background: ${(props) => props.theme.paginationBackground};
    border-color: ${(props) => props.theme.paginationBorderColor};

    transition: color ${(props) => props.theme.defaultTransition};
  }

  & a.page-link:hover,
  & .page-item.active a.page-link {
    color: ${(props) =>
      props.theme.paginationColorHover ?? props.theme.primaryColor};
    background: ${(props) => props.theme.paginationBackground};
    border-color: ${(props) => props.theme.paginationBorderColor};
  }

  & .page-item.disabled a.page-link {
    opacity: 0.4;
  }
`;

export default PaginationSection;
