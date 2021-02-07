import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  render(){
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={settings.defaultColumnIcon} />
            </span>
            {settings.defaultSearchResultsTitle}
          </h3>

          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
