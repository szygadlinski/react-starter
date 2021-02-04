import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={pageContents.faq.title}
      image={pageContents.faq.image}
    />
    {pageContents.faq.description}
  </Container>
);

export default FAQ;
