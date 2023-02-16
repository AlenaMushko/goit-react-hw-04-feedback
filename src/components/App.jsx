import React, { useState } from 'react';

import { Section } from './Section';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

import {Container} from './App.styled'
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const changeState = state => state + 1;

  const addFeedback = key => {
    switch (key) {
      case 'good':
        setGood(changeState);
        break;
      case 'neutral':
        setNeutral(changeState);
        break;
      case 'bad':
        setBad(changeState);
        break;
      default:
        return;
    }
  };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
   return Math.round((good * 100) / countTotalFeedback());
  };

      return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback()!== 0
            ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            />)
        : (<Notification message="There is no feedback" />)}
        </Section>
      </Container>
    );
  }

