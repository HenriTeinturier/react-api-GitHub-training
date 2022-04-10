import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import './searchresult.scss';

function SearchResult({ resultNbr, searchValue, nbPages }) {
  return (
    <div className="searchresult">
      <Message>
        <p className="presult">
          La recherche <em>{searchValue}</em> à donnée <em>{resultNbr}</em> résultats. Total pages: <em>{nbPages}</em>.
        </p>
      </Message>
    </div>
  );
}

SearchResult.propTypes = {
  nbPages: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  resultNbr: PropTypes.number.isRequired,
};

export default SearchResult;
