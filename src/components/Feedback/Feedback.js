import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistic from 'components/Statistic';
// import PropTypes from 'prop-types';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10
    );
  };

  render() {
    const keys = Object.keys(this.state);

    return (
      <>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h1>Statistics</h1>

        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Feedback;
