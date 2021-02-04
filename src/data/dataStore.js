export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  logoIcon: 'cat',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
  info: {
    title: 'Info',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique sagittis accumsan. Cras volutpat ipsum ac ligula commodo aliquam. Sed leo mauris, lacinia vitae bibendum nec, venenatis eget ligula. Nam erat dolor, egestas non venenatis id, dignissim et massa. Nunc sem justo, volutpat id ornare sed, scelerisque in ligula. Sed congue diam orci, nec hendrerit eros imperdiet vestibulum. Proin tempor purus erat, in tempor diam fermentum eget. Nullam sit amet mauris est. Praesent at orci scelerisque, dapibus urna non, dictum nisi. Maecenas ultrices nisi ac nisi mattis ultrices. Quisque hendrerit tempor mi, at euismod ante iaculis vitae. Curabitur mattis elit egestas eleifend fermentum. Nulla facilisi.',
  },
  faq: {
    title: 'FAQ',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id blandit est. Vestibulum ac lacus eget lacus interdum varius a vitae mi. Duis sed nisi molestie, imperdiet leo sit amet, luctus odio. Nunc id rhoncus leo. Morbi non enim quis est convallis volutpat ut a leo. Etiam urna tellus, blandit at venenatis tincidunt, suscipit non lectus. Mauris semper leo odio, a vestibulum libero tempus a. Sed congue congue erat, quis porta magna viverra nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lectus sed nisi accumsan sollicitudin quis a quam. Cras iaculis, elit consequat hendrerit vestibulum, nisl tortor sodales urna, vel consectetur leo sem at nunc. Vivamus luctus tincidunt diam, vel euismod ligula posuere id. Duis auctor vel diam sit amet interdum. Nulla at egestas erat. Fusce ultricies urna eget lobortis tincidunt. Nulla tempus varius tellus, vel tincidunt purus ultrices ut.',
  },
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          id: 0,
          title: 'This Is Going to Hurt',
        },
        {
          id: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          id: 0,
          title: 'Harry Potter',
        },
        {
          id: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          id: 0,
          title: 'The Witcher',
        },
        {
          id: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    index: 0,
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    index: 1,
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    index: 0,
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    index: 1,
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    index: 0,
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    index: 1,
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
