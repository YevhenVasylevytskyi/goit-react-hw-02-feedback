import React from 'react';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        PositiveFeedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistic;
