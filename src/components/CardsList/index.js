import PropTypes from 'prop-types';
import CardItem from 'src/components/CardItem';
import PaginationGitResult from '../Pagination';
import './cardslist.scss';

function CardsList({
  cards, actualPage, setActuelPage, nbPages,
}) {
  // const { id, language, owner } = cards;
  // const { login, avatar_url } = owner;
  // cards.map((card) => {console.log(card)});

  return (
    <div className="cards">
      {cards.map((card) => <CardItem key={card.id} {...card} />)}
      <PaginationGitResult
        actualPage={actualPage}
        setActuelPage={setActuelPage}
        nbPages={nbPages}
      />
    </div>
  );
}

CardsList.propTypes = {
  actualPage: PropTypes.number.isRequired,
  setActuelPage: PropTypes.func.isRequired,
  nbPages: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // id
    }).isRequired,
  ).isRequired,
};

export default CardsList;
