import React, { useState } from 'react';

const BallTracker = ({ teams, setTeams }) => {
  const [ballEvent, setBallEvent] = useState({
    teamIndex: 0,
    runs: 0,
    wide: false,
    noBall: false,
    wicket: false,
  });

  const handleEventChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBallEvent({ ...ballEvent, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = () => {
    const updatedTeams = [...teams];
    const team = updatedTeams[ballEvent.teamIndex];

    if (ballEvent.wicket) {
      team.wickets += 1;
    } else {
      team.totalScore += parseInt(ballEvent.runs, 10);
    }

    setTeams(updatedTeams);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Ball Tracker</h2>
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">Select Team</label>
          <select
            name="teamIndex"
            value={ballEvent.teamIndex}
            onChange={handleEventChange}
            className="w-full px-3 py-2 border rounded"
          >
            {teams.map((team, index) => (
              <option key={index} value={index}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Runs</label>
          <input
            type="number"
            name="runs"
            value={ballEvent.runs}
            onChange={handleEventChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="checkbox"
              name="wide"
              checked={ballEvent.wide}
              onChange={handleEventChange}
            />
            Wide Ball
          </label>
          <label>
            <input
              type="checkbox"
              name="noBall"
              checked={ballEvent.noBall}
              onChange={handleEventChange}
            />
            No Ball
          </label>
          <label>
            <input
              type="checkbox"
              name="wicket"
              checked={ballEvent.wicket}
              onChange={handleEventChange}
            />
            Wicket
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default BallTracker;