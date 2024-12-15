import React from 'react';

const ScoreBoard = ({ team }) => {
  return (
    <div className="bg-white bg-opacity-90 shadow rounded p-4">
      <h2 className="text-xl font-semibold">{team.name}</h2>
      <p className="mt-2 text-xl text-green-500 font-semibold">Total Score: {team.totalScore}</p>
      <p>No of Sixs: {team.noOfSixs}</p>
      <p>No of Fours: {team.noOfFours}</p>
      <br></br>
      <p>Wickets: {team.wickets}</p>
      <p>No of Wides: {team.wids}</p>
      <p>No of No Balls: {team.noBalls}</p>
    </div>
  );
};

export default ScoreBoard;