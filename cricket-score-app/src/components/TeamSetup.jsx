import React from 'react';

const TeamSetup = ({ teams, setTeams }) => {
  const handleInputChange = (index, field, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index][field] = value;
    setTeams(updatedTeams);
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Team Setup</h2>
      {teams.map((team, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium">
            Team {index + 1} Name
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={team.name}
            onChange={(e) =>
              handleInputChange(index, 'name', e.target.value)
            }
            placeholder={`Enter Team ${index + 1} Name`}
          />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Overs</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            placeholder="Enter Overs"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Balls Per Over</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            placeholder="Enter Balls Per Over"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSetup;