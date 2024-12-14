import React, { useState } from 'react';

const TeamSetup = ({ teams, setTeams }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index][field] = value;
    setTeams(updatedTeams);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white bg-opacity-90 shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Team Setup</h2>
      {teams.map((team, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium">
            Team {index + 1} Name
          </label>
          <div className="relative">
            {isEditing ? (
              <input
                type="text"
                className="w-full border rounded p-2 bg-white focus:outline-none"
                style={{ height: '40px' }} // Fixed height for input
                value={team.name || ''}
                onChange={(e) =>
                  handleInputChange(index, 'name', e.target.value)
                }
                placeholder={`Enter Team ${index + 1} Name`}
              />
            ) : (
              <p
                className="w-full border rounded p-2 bg-gray-100"
                style={{ height: '40px', display: 'flex', alignItems: 'center' }}
              >
                {team.name || `Team ${index + 1}`}
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Overs</label>
          <div className="relative">
            {isEditing ? (
              <input
                type="number"
                className="w-full border rounded p-2 bg-white focus:outline-none"
                style={{ height: '40px' }}
                value={teams[0].overs || ''}
                onChange={(e) => handleInputChange(0, 'overs', e.target.value)}
                placeholder="Enter Overs"
              />
            ) : (
              <input disabled
              type="number"
              className="w-full border rounded p-2 bg-gray-100"
              style={{ height: '40px' }}
              value={teams[0].overs || ''}
              onChange={(e) => handleInputChange(0, 'overs', e.target.value)}
              placeholder="Enter Overs"
            />
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Balls Per Over</label>
          <div className="relative">
            {isEditing ? (
              <input
                type="number"
                className="w-full border rounded p-2 bg-white focus:outline-none"
                style={{ height: '40px' }}
                placeholder="Enter Balls Per Over"
              />
            ) : (
              <p
                className="w-full border rounded p-2 bg-gray-100"
                style={{ height: '40px', display: 'flex', alignItems: 'center' }}
              >
                6
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white rounded px-4 py-2 mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamSetup;