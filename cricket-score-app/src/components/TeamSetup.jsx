import React, { useState } from 'react';

const TeamSetup = ({ teams, setTeams }) => {
  const [settings, setSettings] = useState({ overs: 5, ballsPerOver: 6 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleTeamNameChange = (index, name) => {
    const updatedTeams = [...teams];
    updatedTeams[index].name = name;
    setTeams(updatedTeams);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Team Setup</h2>
      <div className="space-y-2">
        {teams.map((team, index) => (
          <div key={index}>
            <label className="block text-sm font-medium">
              Team {index + 1} Name
            </label>
            <input
              type="text"
              value={team.name}
              onChange={(e) => handleTeamNameChange(index, e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder={`Enter Team ${index + 1} Name`}
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium">Overs</label>
          <input
            type="number"
            name="overs"
            value={settings.overs}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Balls per Over</label>
          <input
            type="number"
            name="ballsPerOver"
            value={settings.ballsPerOver}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSetup;