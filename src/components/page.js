import React from 'react';

import Deck from './deck';

import '../styles/page.scss';

const Page = props => {
  return props.content.map((deck, idx) => (
    <Deck key={'deck'+(idx+1)} deck={deck} id={'deck'+(idx+1)} />
  ));
};

export default Page;
