import React, { useState } from 'react';
import TeamSetup from './components/TeamSetup';
import BallTracker from './components/BallTracker';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [teams, setTeams] = useState([
    {
      name: 'Team A',
      players: [],
      bowlers: [],
      totalScore: 0,
      wickets: 0,
      overs: 0,
    },
    {
      name: 'Team B',
      players: [],
      bowlers: [],
      totalScore: 0,
      wickets: 0,
      overs: 0,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="text-center bg-blue-500 text-white py-4">
        <h1 className="text-2xl font-bold">Cricket Score Tracker</h1>
      </header>
      <main className="p-4 space-y-4">
        <TeamSetup teams={teams} setTeams={setTeams} />
        <BallTracker teams={teams} setTeams={setTeams} />
        {teams.map((team, index) => (
          <ScoreBoard key={index} team={team} />
        ))}
      </main>
    </div>
  );
};

export default App;