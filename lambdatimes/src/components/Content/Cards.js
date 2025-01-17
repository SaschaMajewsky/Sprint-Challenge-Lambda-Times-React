import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({cards}) => (
    <div className="cards-container">
        {cards.map((card, index) => <Card card={card} key={index} />
        )}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  );

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;