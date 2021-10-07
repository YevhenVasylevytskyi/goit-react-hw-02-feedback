import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
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
}

FeedbackOptions.protoType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
