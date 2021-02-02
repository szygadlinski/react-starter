import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number,
  }

  render(){
    const {title, id, index} = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <article
            className={styles.component}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h4>{title}</h4>
          </article>
        )}
      </Draggable>
    );
  }
}

export default Card;
