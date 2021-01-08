import {NominationBlock} from "./components/NominationBlock/NominationBlock";
import React from "react";
import Participants from "./data/Participants";

const App = () => {
  const [winners, setWinners] = React.useState([]);

  const nominations = Object.keys(Participants);

  const selectWinner = (nomination) => {
    const nominationParticipants = Participants[nomination];
    let winnerApplicant = null;

    let tryCount = 0;
    do {
      winnerApplicant = getWinnerApplicant(nominationParticipants);
      tryCount ++;
    } while (winners.some(w => w === winnerApplicant) && tryCount < 50);

    setWinners([...winners, winnerApplicant]);
    return winnerApplicant;
  };

  const getWinnerApplicant = (nominationParticipants) => (
    nominationParticipants[Math.floor(Math.random()*nominationParticipants.length)]
  );

  return (
    Object.keys(nominations).map(i =>
        <NominationBlock nomination={nominations[i]} onClick={selectWinner} key={i}/>
    )
  );
};

export default App;
