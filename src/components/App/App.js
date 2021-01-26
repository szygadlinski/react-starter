import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import {settings, pageContents, listData} from '../../data/dataStore.js';

class App extends React.Component {
  state = {
    lists: [listData] || [],
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            title,
            description: '<p>I can do all the things!!!</p>',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        {this.state.lists.map((listProps, index) => (
          <List key={index} {...listProps} />
        ))}

        <div>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
}

export default App;
