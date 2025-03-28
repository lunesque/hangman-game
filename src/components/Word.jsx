import { useState, useEffect } from 'react';

export const Word = ({ refresh, guess, setGuess, word, setWord}) => {

    useEffect(() => {
        fetch('http://localhost:3333/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setWord({word: data.word, letters: data.word.split("")});
                setGuess([]);
            })
          }
        , [refresh]);    

    
    return (
        <div className="wordZone">
            <p className="word">
                {word.letters.map((letter) => {
                    if (guess.includes(word.word) || guess.includes(letter)) {
                        return (<span className="letter letter-show">{letter}</span>)
                    } else 
                    return (<span className="letter letter-hidden">{letter}</span>)
                })}
            </p>
        </div>


    );
}