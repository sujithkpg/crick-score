import React, { useState, useEffect } from 'react';
import TeamSetup from './components/TeamSetup';
import BallTracker from './components/BallTracker';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [teams, setTeams] = useState([
    { name: 'Team A', totalScore: 0, wickets: 0, overs: 0 },
    { name: 'Team B', totalScore: 0, wickets: 0, overs: 0 },
  ]);

  const backgroundImages = [
    '/assets/IMG_1.jpg',
    '/assets/IMG_2.jpg',
    '/assets/IMG_3.jpg',
  ];

  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => {
        const nextIndex = (backgroundImages.indexOf(prev) + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [backgroundImages]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 bg-cover bg-center"
    style={{ backgroundImage: `url(${currentBackground})` }}>
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Cricket Score Tracker</h1>
        <h7>Powered By: Sujith Gamage</h7>
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