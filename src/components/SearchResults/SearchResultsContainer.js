import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state.cards, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);
