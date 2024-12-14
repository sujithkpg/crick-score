import React from 'react';

const ScoreBoard = ({ team }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
      <p>Total Score: {team.totalScore}</p>
      <p>Wickets: {team.wickets}</p>
    </div>
  );
};

export default ScoreBoard;