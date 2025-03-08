import { useState } from 'react';

export const Form = ({ guess, setGuess, word, mistakeCounter, setMistakeCounter}) => {
    const [inputValue, setInputValue] = useState('');

    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y','u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    const handleChange = (e) => {
        e.preventDefault(); // prevent the default action
        setInputValue(e.target.value); // set name to e.target.value (event)
    };


    const handleKeyClick = (e) => {
        if (inputValue != '') {
            setInputValue(inputValue + e.target.getAttribute('letter'));
        } else setInputValue(e.target.getAttribute('letter'));
    }


    const handleClick = () => {
        if (!guess.includes(inputValue) && inputValue!='') {
            setGuess([...guess, inputValue]);
        } 
        if (!(word.letters.includes(inputValue) || word.word == inputValue)) {
            setMistakeCounter(mistakeCounter+1);
        }
        setInputValue('');
    }



    return (
        <form className="hangmanForm" name="hangmanForm">
            <input type="text" name="guess" id="guess" value={inputValue} onChange={handleChange}/>
            <div className="keyboard">
            {keys.map((row) => {
                return (
                <div className="row">
                    {row.map((key) => {
                        if (guess.includes(key)) {
                            if (word.word.includes(key)) {
                                return (
                                    <div className="key key--correct" onClick={handleKeyClick} letter={key}> 
                                        {key.toUpperCase()}
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="key key--incorrect" letter={key}> 
                                        {key.toUpperCase()}
                                    </div>
                                )
                            }
                        } else {
                            return (
                            <div className="key" onClick={handleKeyClick} letter={key}>
                                {key.toUpperCase()}
                            </div>
                        )}
                    })}
                </div>
                )
            })}
            </div>
            
            <div className="button" onClick={handleClick}>Submit Guess</div>
            <input id="hidden-button" type="submit" disabled={true}/>
        </form>
    );
}