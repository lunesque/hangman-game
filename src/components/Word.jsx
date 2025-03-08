import { useState, useEffect } from 'react';

export const Word = ({ guess, word, setWord}) => {

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
            })
          }
        , []);    
            
    
    return (
        <div className="word">
            {word.letters.map((letter) => {
                if (guess.includes(word.word) || guess.includes(letter)) {
                    return (<p className="letter letter-show">{letter}</p>)
                } else 
                return (<p className="letter letter-hidden">{letter}</p>)
            })}
        </div>
    );
}