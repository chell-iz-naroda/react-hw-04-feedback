import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistic } from './Statistics/Statistic';
import { Notification } from './Notification';
import { Layout } from 'Layout';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }




  render() {
    return (
      <>
        <Layout>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
          <Section title="Statistic">
            {this.countTotalFeedback() ? <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
          </Section>
        </Layout>
      </>
    );
  }


}