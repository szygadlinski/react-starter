import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imageSource: PropTypes.string,
  }

  static defaultProps = {
    children: <p>Interesting things I want to check out!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
          imageSource={this.props.imageSource} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Animals' />
          <Column title='Plants' />
          <Column title='Minerals' />
        </div>
      </section>
    );
  }
}

export default List;
