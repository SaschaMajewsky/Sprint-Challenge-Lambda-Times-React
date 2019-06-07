import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card:{headline, img, author}}) => (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt="The visual part of the article."/>
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object
}

export default Card;