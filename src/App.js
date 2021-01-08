import {NominationBlock} from "./components/NominationBlock/NominationBlock";
import React from "react";
import Participants from "./data/Participants";

const App = () => {
  const [winners, setWinners] = React.useState([]);

  const nominations = Object.keys(Participants);

  const selectWinner = (nomination) => {
    const nominationParticipants = Participants[nomination];
    let winnerApplicant = null;
    
    do {
      winnerApplicant = getWinnerApplicant(nominationParticipants);
    } while (winners.some(w => w === winnerApplicant));

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
