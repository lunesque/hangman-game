export const Hangman = ({ mistakeCounter }) => {

    return (
        <div>
            <svg width="200" height="200" fill="none" stroke="black" viewBox="-1 -1 200 202">
                <path className="base" d="M 170 200 L 0 200 L 0 0 L 101 0"/>
                {mistakeCounter>=1 ? <path className="rope" d="M 100 0 L 100 30" /> : null}
                {mistakeCounter>=2 ? <circle className="head" cx="100" cy="50" r="20" /> : null}
                {mistakeCounter>=3 ? <path className="body" d="M 100 70 L 100 130" /> : null}
                {mistakeCounter>=4 ? <path className="left-arm" d="M 100 80 L 70 110" /> : null}
                {mistakeCounter>=5 ? <path className="right-arm" d="M 100 80 L 130 110" /> : null}
                {mistakeCounter>=6 ? <path className="left-leg" d="M 100 130 L 80 170" /> : null}
                {mistakeCounter>=7 ? <path className="right-leg" d="M 100 130 L 120 170" /> : null}
            </svg>
        </div>
    )
}