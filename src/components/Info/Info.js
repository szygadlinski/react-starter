import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero
      titleText={pageContents.info.title}
      image={pageContents.info.image}
    />
    {pageContents.info.description}
  </Container>
);

export default Info;
