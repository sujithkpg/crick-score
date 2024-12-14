import React from 'react';

const ScoreBoard = ({ team }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold">{team.name}</h2>
      <p className="mt-2">Total Score: {team.totalScore}</p>
      <p>Wickets: {team.wickets}</p>
    </div>
  );
};

export default ScoreBoard;