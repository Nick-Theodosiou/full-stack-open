import { useState } from 'react';

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  var all = good + neutral + bad;
  var avg = (good - bad) / all ? (good - bad) / all : 0;
  var pos = (good * 100) / all ? (good * 100) / all : 0;

  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine name='good' value={good}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine name='neutral' value={neutral}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine name='bad' value={bad}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine name='all' value={all}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine name='average' value={avg}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine name='positive' value={pos}></StatisticLine>
        </tr>
      </tbody>
    </table>
  )
}

const Button = (props) => <button onClick={props.handleClick}>props.text</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const checkFeedback = () => {
    if (good + neutral + bad === 0)
      return <p>No feedback given</p>
    else
      return <Statistics good={good} neutral={neutral} bad={bad} />
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1)} text='bad'></Button>
      <h1>statistics</h1>
      {checkFeedback()}
    </div>
  )
}

export default App