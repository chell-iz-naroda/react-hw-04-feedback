import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistic } from './Statistics/Statistic';
import { Notification } from './Notification';
import { Layout } from 'Layout';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;

      default:

    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {

    return Math.round((good / countTotalFeedback()) * 100);
  }


  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() ? <Statistic good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
      </Section>
    </Layout>
  );
}