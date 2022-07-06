import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  var votesZero = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(votesZero)


  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const increaseVote = () => setVotes(existingVotes => {
    return [...existingVotes.slice(0, selected), existingVotes[selected] + 1, ...existingVotes.slice(selected + 1)]
  })

  const mostVotes = () => {

    let maxIndex = 0
    let maxVotes = 0
    votes.forEach(vote => {
      if (vote > maxVotes){
        maxVotes = vote
        maxIndex = votes.indexOf(vote)
      }
    })

    return (
      <>
        <h1>Anecdote with most votes</h1>
        <h2>{anecdotes[maxIndex]}</h2>
        <h2>has {votes[maxIndex]} votes</h2>
      </>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h2>has {votes[selected]} votes</h2>
      <button onClick={increaseVote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      {mostVotes()}
    </div>
  )
}

export default App