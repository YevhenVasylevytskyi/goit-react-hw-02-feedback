import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => {
        return (
          <button type="button" key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
