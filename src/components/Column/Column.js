import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
//import {Droppable} from 'react-beautiful-dnd';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class Column extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render(){
    const {title, icon, cards, addCard/*, id*/} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>

        <div>
          {/*<Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >*/}
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/*{provided.placeholder}
              </div>
            )}
          </Droppable>*/}
        </div>

        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
