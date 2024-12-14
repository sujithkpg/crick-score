import React, { useState } from 'react';

const BallTracker = ({ teams, setTeams }) => {
  const [ballEvent, setBallEvent] = useState({
    teamIndex: 0,
    runs: 0,
    wicket: false,
    wide: false,
    noBall: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBallEvent({
      ...ballEvent,
      [name]: type === 'checkbox' ? checked : parseInt(value, 10),
    });
  };

  const increaseRun = () => {
    ++ballEvent.runs;
  };

  const handleAddEvent = () => {
    const updatedTeams = [...teams];
    const team = updatedTeams[ballEvent.teamIndex];

    if (ballEvent.wicket) {
      team.wickets += 1;
    } else {
      team.totalScore += ballEvent.runs;
    }

    setTeams(updatedTeams);
    setBallEvent({ teamIndex: 0, runs: 0, wicket: false, wide: false, noBall: false });
  };

  return (
    <div className="bg-white bg-opacity-90 shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Ball Tracker</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Team</label>
        <select
          name="teamIndex"
          className="w-full border rounded p-2"
          value={ballEvent.teamIndex}
          onChange={handleInputChange}
        >
          {teams.map((team, index) => (
            <option key={index} value={index}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Runs</label>
        <input disabled
          type="number"
          name="runs"
          className="border rounded p-2"
          value={ballEvent.runs}
          onChange={handleInputChange}
        />
        <button
        onClick={increaseRun}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        +
      </button>

      <button
        onClick={handleAddEvent}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        -
      </button>
      </div>
      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="checkbox"
            name="wicket"
            checked={ballEvent.wicket}
            onChange={handleInputChange}
          />
          Wicket
        </label>
        <label>
          <input
            type="checkbox"
            name="wide"
            checked={ballEvent.wide}
            onChange={handleInputChange}
          />
          Wide
        </label>
        <label>
          <input
            type="checkbox"
            name="noBall"
            checked={ballEvent.noBall}
            onChange={handleInputChange}
          />
          No Ball
        </label>
      </div>
      <button
        onClick={handleAddEvent}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Add Event
      </button>
    </div>
  );
};

export default BallTracker;