export const Keyboard = ({ guess, word, inputValue }) => {
    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y','u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    const handleKeyClick = (key) => {
        // if (document.querySelector("#guess").value != '') {
        //     document.querySelector("#guess").value += key;
        // } else document.querySelector("#guess").value += key;
        // document.forms["hangmanForm"]["guess"].value += key;
    }


    return (
        <div className="keyboard">
            {keys.map((row) => {
                return (
                <div className="row">
                    {row.map((key) => {
                        if (guess.includes(key)) {
                            if (word.includes(key)) {
                                return (
                                    <div className="key key--correct" onClick={handleKeyClick(key)}> 
                                        {key.toUpperCase()}
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="key key--incorrect"> 
                                        {key.toUpperCase()}
                                    </div>
                                )
                            }
                        } else return (
                            <div className="key" onClick={handleKeyClick(key)}>
                                {key.toUpperCase()}
                            </div>
                        )
                    })}
                </div>
                )
            })}
        </div>
    );
}