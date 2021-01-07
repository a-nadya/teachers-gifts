import * as React from "react";
import Participants from "../../data/Participants";
import './NominationBlock.css';

export const NominationBlock = (props) => {
    const {nomination, onClick} = props;
    const [winner, setWinner] = React.useState(null);

    const handleClick = () => {
        const winner = onClick(nomination);
        setWinner(winner);
    };

    return (
        <div className="root">
            <header className="header">{nomination}</header>
            <div className="body">
                <div className="participants">
                    {Participants[nomination].map(p => <div key={p}>{p}</div>)}
                </div>
                <button className="button" onClick={handleClick} disabled={!!winner}>
                    Выбрать случайного
                </button>
                <div className="winner">{winner}</div>
            </div>
        </div>
    );
};