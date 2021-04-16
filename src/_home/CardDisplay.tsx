import React from 'react';
import Card, { CardProps } from './Card';

const cards: CardProps[] = [
  {
    title: 'Single Pendulum',
    description:
      'A simutation of the motion for a single pendulum under gravitaional field',
    link: '/01-single-pendulum',
  },
];

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
