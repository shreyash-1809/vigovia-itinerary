// TripSummary.jsx
function TripSummary({ details }) {
  return (
    <section className="bg-white border border-purple-100 shadow p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2 text-purple-700 border-b border-purple-200 pb-1">
        🧳 Trip Summary
      </h2>
      <div className="grid grid-cols-2 text-sm gap-2">
        <p><strong>From:</strong> {details.departureCity}</p>
        <p><strong>To:</strong> {details.destination}</p>
        <p><strong>Departure:</strong> {details.departureDate}</p>
        <p><strong>Arrival:</strong> {details.arrivalDate}</p>
        <p><strong>Travelers:</strong> {details.travelers}</p>
        <p><strong>Days:</strong> {details.days}</p>
      </div>
    </section>
  );
}

export default TripSummary;
