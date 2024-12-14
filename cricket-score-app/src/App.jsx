import React, { useState } from 'react';
import TeamSetup from './components/TeamSetup';
import BallTracker from './components/BallTracker';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [teams, setTeams] = useState([
    { name: 'Team A', totalScore: 0, wickets: 0, overs: 0 },
    { name: 'Team B', totalScore: 0, wickets: 0, overs: 0 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Cricket Score Tracker</h1>
      </header>

      <main className="p-4 flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <TeamSetup teams={teams} setTeams={setTeams} />
          <BallTracker teams={teams} setTeams={setTeams} />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          <ScoreBoard team={teams[0]} />
          <ScoreBoard team={teams[1]} />
        </div>
      </main>
    </div>
  );
};

export default App;