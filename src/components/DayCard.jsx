// DayCard.jsx
import { useState } from 'react';

function DayCard({ day, index, updateDay }) {
  const [activity, setActivity] = useState({ name: '', description: '', time: '' });
  const [transfer, setTransfer] = useState({ type: '', timing: '', people: '' });
  const [flight, setFlight] = useState({ from: '', to: '', flightNo: '' });

  const handleActivityAdd = () => {
    if (!activity.name) return;
    const updatedDay = { ...day, activities: [...day.activities, activity] };
    updateDay(index, updatedDay);
    setActivity({ name: '', description: '', time: '' });
  };

  const handleTransferAdd = () => {
    if (!transfer.type) return;
    const updatedDay = { ...day, transfers: [...day.transfers, transfer] };
    updateDay(index, updatedDay);
    setTransfer({ type: '', timing: '', people: '' });
  };

  const handleFlightAdd = () => {
    if (!flight.flightNo) return;
    const updatedDay = { ...day, flights: [...day.flights, flight] };
    updateDay(index, updatedDay);
    setFlight({ from: '', to: '', flightNo: '' });
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-pink-900 to-black border border-purple-700 p-8 rounded-2xl shadow-2xl mb-10 w-full text-white">
      <h3 className="text-3xl font-extrabold text-purple-300 mb-8">📅 Day {day.day} – {day.date || 'Not set'}</h3>

      {/* Activity Section */}
      <div className="mb-10">
        <h4 className="text-xl font-semibold text-pink-400 mb-4">🎯 Activities</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={activity.name}
            onChange={(e) => setActivity({ ...activity, name: e.target.value })}
            className="bg-black border border-pink-500 text-white p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={activity.description}
            onChange={(e) => setActivity({ ...activity, description: e.target.value })}
            className="bg-black border border-pink-500 text-white p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Time"
            value={activity.time}
            onChange={(e) => setActivity({ ...activity, time: e.target.value })}
            className="bg-black border border-pink-500 text-white p-3 rounded-md"
          />
        </div>
        <button
          onClick={handleActivityAdd}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full"
        >
          ➕ Add Activity
        </button>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-white">
          {day.activities.map((a, i) => (
            <li key={i}><b>{a.name}</b>: {a.description} ({a.time})</li>
          ))}
        </ul>
      </div>

      {/* Transfer Section */}
      <div className="mb-10">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">🚐 Transfers</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Type"
            value={transfer.type}
            onChange={(e) => setTransfer({ ...transfer, type: e.target.value })}
            className="bg-black border border-blue-500 text-white p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Timing"
            value={transfer.timing}
            onChange={(e) => setTransfer({ ...transfer, timing: e.target.value })}
            className="bg-black border border-blue-500 text-white p-3 rounded-md"
          />
          <input
            type="number"
            placeholder="People"
            value={transfer.people}
            onChange={(e) => setTransfer({ ...transfer, people: e.target.value })}
            className="bg-black border border-blue-500 text-white p-3 rounded-md"
          />
        </div>
        <button
          onClick={handleTransferAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
        >
          ➕ Add Transfer
        </button>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-white">
          {day.transfers.map((t, i) => (
            <li key={i}><b>{t.type}</b> – {t.timing} for {t.people} people</li>
          ))}
        </ul>
      </div>

      {/* Flight Section */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-indigo-400 mb-4">✈️ Flights</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="From"
            value={flight.from}
            onChange={(e) => setFlight({ ...flight, from: e.target.value })}
            className="bg-black border border-indigo-500 text-white p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="To"
            value={flight.to}
            onChange={(e) => setFlight({ ...flight, to: e.target.value })}
            className="bg-black border border-indigo-500 text-white p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Flight No"
            value={flight.flightNo}
            onChange={(e) => setFlight({ ...flight, flightNo: e.target.value })}
            className="bg-black border border-indigo-500 text-white p-3 rounded-md"
          />
        </div>
        <button
          onClick={handleFlightAdd}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full"
        >
          ➕ Add Flight
        </button>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-white">
          {day.flights.map((f, i) => (
            <li key={i}><b>{f.flightNo}</b>: {f.from} → {f.to}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DayCard;
