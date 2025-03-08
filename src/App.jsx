import { Form } from './components/Form';
import { FormV2 } from './components/FormV2';
import { Word } from './components/Word';
import { Hangman } from './components/Hangman';
import { useState } from 'react';




function App() {
  const [guess, setGuess] = useState([]);
  const [word, setWord] = useState({word: '', letters: []});
  const [mistakeCounter, setMistakeCounter] = useState(0);


  return (
      <div className="site-container">
        <h1 className="main-title">Hangman</h1>
        <div className='game'>
          <div className='hangman'>
            <Hangman mistakeCounter={mistakeCounter}/>
          {(guess.includes(word.word) || word.letters.every((l) => guess.some((g) => g === l))) && mistakeCounter<7 ? 
          <p>You won :D</p>
          : null
          }
          {mistakeCounter >= 7 ?
          <p>You lost :(</p>
          :null
          }
          <Word guess={guess} word={word} setWord={setWord} />
          </div>
          <div className="inputZone">
            <p>Guess counter : {guess.length}</p>
            <p>Mistake counter : {mistakeCounter}</p>
            {/* <Form guess={guess} setGuess={setGuess} word={word}/> */}
            <FormV2 guess={guess} setGuess={setGuess} word={word} mistakeCounter={mistakeCounter} setMistakeCounter={setMistakeCounter}/>
          </div>
        </div>
      </div>
  )
}

export default App
