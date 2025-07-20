// App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TripSummary from './components/TripSummary';
import DayCard from './components/DayCard';
import { generatePDF } from './utils/generatePDF';

function App() {
  const [tripDetails, setTripDetails] = useState({
    departureCity: '',
    destination: '',
    departureDate: '',
    arrivalDate: '',
    travelers: 1,
    days: 1,
  });

  const [tripPlan, setTripPlan] = useState([]);
  const [showDayInputs, setShowDayInputs] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTripPlan = [];

    for (let i = 0; i < tripDetails.days; i++) {
      newTripPlan.push({
        day: i + 1,
        date: '',
        activities: [],
        transfers: [],
        flights: [],
      });
    }

    setTripPlan(newTripPlan);
    setShowDayInputs(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <Header />

      {!showDayInputs && (
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg border border-purple-200 shadow-lg rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Enter Trip Overview</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Departure City</label>
              <input
                type="text"
                name="departureCity"
                value={tripDetails.departureCity}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Destination</label>
              <input
                type="text"
                name="destination"
                value={tripDetails.destination}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Departure Date</label>
                <input
                  type="date"
                  name="departureDate"
                  value={tripDetails.departureDate}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Arrival Date</label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={tripDetails.arrivalDate}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">No. of Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  value={tripDetails.travelers}
                  onChange={handleChange}
                  min={1}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Trip Duration (Days)</label>
                <input
                  type="number"
                  name="days"
                  value={tripDetails.days}
                  onChange={handleChange}
                  min={1}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
            >
              ➕ Add Day-wise Plan
            </button>
          </form>
        </div>
      )}

      {showDayInputs && (
        <>
          <div id="pdf-content" className="max-w-4xl mx-auto p-6 bg-white/90 backdrop-blur-lg border border-purple-200 rounded-xl shadow text-black mt-10">
            <TripSummary details={tripDetails} />
            {tripPlan.map((day, idx) => (
              <DayCard key={idx} day={day} index={idx} updateDay={(i, updatedDay) => {
  const updatedPlan = [...tripPlan];
  updatedPlan[i] = updatedDay;
  setTripPlan(updatedPlan);
}} />

            ))}
            <Footer />
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => generatePDF('pdf-content')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition duration-200 transform hover:scale-105"
            >
              📄 Download Itinerary PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
