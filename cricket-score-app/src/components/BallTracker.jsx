import React, { useState } from 'react';

const BallTracker = ({ teams, setTeams }) => {
  const [ballEvent, setBallEvent] = useState({
    teamIndex: 0,
    runs: 0,
    wicket: false,
    wide: false,
    noBall: false,
  });

  // Increment runs
  const handleIncrement = () => {
    setBallEvent((prevEvent) => ({
      ...prevEvent,
      runs: prevEvent.runs + 1, // Increment runs
    }));
  };

  // Decrement runs
  const handleDecrement = () => {
    setBallEvent((prevEvent) => ({
      ...prevEvent,
      runs: prevEvent.runs > 0 ? prevEvent.runs - 1 : 0, // Prevent runs from going below 0
    }));
  };

  // Increment runs
  const addSix = () => {
    setBallEvent((prevEvent) => ({
      ...prevEvent,
      runs: prevEvent.runs + 6, // Increment runs
    }));
  };

  // Increment runs
  const addFour = () => {
    setBallEvent((prevEvent) => ({
      ...prevEvent,
      runs: prevEvent.runs + 4, // Increment runs
    }));
  };


  // Handle other input changes (like team selection, wicket, etc.)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBallEvent((prevEvent) => ({
      ...prevEvent,
      [name]: type === 'checkbox' ? checked : parseInt(value, 10),
    }));
  };

  // Add event to the selected team
  const handleAddEvent = () => {
    const updatedTeams = [...teams];
    const team = updatedTeams[ballEvent.teamIndex];

    if (ballEvent.wicket) {
      team.wickets += 1; // Increment wicket count
    } else {
      team.totalScore += ballEvent.runs; // Add runs to the team's total score
    }

    setTeams(updatedTeams);

    // Reset ballEvent state
    setBallEvent({
      teamIndex: 0,
      runs: 0,
      wicket: false,
      wide: false,
      noBall: false,
    });
  };

  return (
    <div className="bg-white bg-opacity-90 shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Ball Tracker</h2>

      {/* Select Team */}
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

      {/* Runs Counter */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Runs</label>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecrement}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            -
          </button>
          <p className="text-lg font-semibold">{ballEvent.runs}</p>
          <button
            onClick={handleIncrement}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            +
          </button>

          <button
            onClick={addSix}
            className="bg-green-500 text-white rounded px-4 py-2 ml-10"
          >
            * 6
          </button>

          <button
            onClick={addFour}
            className="bg-yellow-500 text-white rounded px-4 py-2 ml-2"
          >
            * 4
          </button>
        </div>
      </div>

      {/* Extras (Wide, Wicket, No Ball) */}
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

      {/* Add Event Button */}
      <button
        onClick={handleAddEvent}
        className="bg-red-500 text-white rounded px-4 py-2 mr-10"
      >
        CLEAR
      </button>

        {/* Add Event Button */}
        <button
        onClick={handleAddEvent}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        ADD EVENT
      </button>
    </div>
  );
};

export default BallTracker;