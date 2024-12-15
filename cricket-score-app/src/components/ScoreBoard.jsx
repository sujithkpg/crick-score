import React from 'react';

const ScoreBoard = ({ team }) => {
  return (
    <div className="bg-white bg-opacity-90 shadow rounded p-4">
      <h2 className="text-xl font-semibold">{team.name}</h2>
      <p className="mt-2 text-xl text-green-500 font-semibold">Total Score: {team.totalScore}</p>
      <p>No of Sixs: {team.wickets}</p>
      <p>No of Fours: {team.wickets}</p>
      <br></br>
      <p>Wickets: {team.wickets}</p>
      <p>No of Wides: {team.wickets}</p>
      <p>No of No Balls: {team.wickets}</p>
    </div>
  );
};

export default ScoreBoard;