import React from 'react';

const FeedbackButton = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackButton;
