import React from 'react';
import Card from './Card';
import { cards } from './cards';

const CardDisplay = () => {
  return (
    <>
      {cards.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          link={card.link}
          key={index}
        />
      ))}
    </>
  );
};

export default CardDisplay;
