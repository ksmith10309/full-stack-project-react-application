import React from 'react';

import Card from './card';

import '../styles/deck.scss';

const Deck = props => {
  return (
    <section id={props.id} className='deck'>
      <header>
        <h2>{props.deck.deckTitle}</h2>
      </header>
      <div className='flex-container'>
        {props.deck.records.map((card, idx) => (
          <Card key={'card'+(idx + 1)+props.id} card={card} id={'card'+(idx + 1)+props.id} />
        ))}
      </div>
    </section>
  );
};

export default Deck;
