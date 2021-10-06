import React from 'react';
import FeedbackButton from 'components/FeedbackButton';
// import PropTypes from 'prop-types';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  countNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  countBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10
    );
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>

        <FeedbackButton
          onGood={this.countGood}
          onNeutral={this.countNeutral}
          onBad={this.countBad}
        />

        {/* <div>
                    <button type="button" onClick={this.countGood}>Good</button>
                    <button type="button" onClick={this.countNeutral}>Neutral</button>
                    <button type="button" onClick={this.countBad}>Bad</button>
                </div> */}
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            PositiveFeedback:{' '}
            {Number.isNaN(this.countPositiveFeedbackPercentage())
              ? 0
              : this.countPositiveFeedbackPercentage()}
            %
          </li>
        </ul>
      </>
    );
  }
}

export default Feedback;
