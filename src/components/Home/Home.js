import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import Container from '../Container/Container';
//import Creator from '../Creator/Creator.js';
//import {settings} from '../../data/dataStore.js';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;

    return (
      <Container>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>

          {lists.map((listData) => (
            <ListLink key={listData.id} {...listData} />
          ))}

          {/*
            <div>
            <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
            </div>
          */}
        </main>
      </Container>
    );
  }
}

export default Home;
