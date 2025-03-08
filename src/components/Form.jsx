import { Keyboard } from './Keyboard';


export const Form = ({ guess, setGuess, word }) => {

    const handleClick = () => {
        const value = document.forms["hangmanForm"]["guess"].value;
        if (!guess.includes(value) && value!='') {
            setGuess([...guess, value]);
        } 
    }

    // const handleEnter = () => {
    //     const newContent = inputText + '\n';
    //     setInputText(newContent);
    // };

    return (
        <form className="hangmanForm" name="hangmanForm">
            <input type="text" name="guess" id="guess"/>
            <Keyboard guess={guess} word={word}/>
            
            <div className="button" onClick={handleClick}>Submit Guess</div>
            <input id="hidden-button" type="submit" disabled={true}/>
        </form>
    );
}