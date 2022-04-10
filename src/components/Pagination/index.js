import PropTypes from 'prop-types';
import './pagination.scss';
import { Pagination } from 'semantic-ui-react';

function PaginationGitResult({ actualPage, setActuelPage, nbPages }) {
  return (
    <Pagination
      className="essai"
      defaultActivePage={actualPage}
      totalPages={nbPages}
      onClick={(e) => setActuelPage(parseInt(e.target.textContent, 10))}
    />
  );
}

PaginationGitResult.propTypes = {
  nbPages: PropTypes.number.isRequired,
  actualPage: PropTypes.number.isRequired,
  setActuelPage: PropTypes.func.isRequired,
};

export default PaginationGitResult;
