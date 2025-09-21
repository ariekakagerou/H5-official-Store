export default function TicketCard({ ticket }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      <h3 className="text-lg font-bold">{ticket.event}</h3>
      <p className="text-gray-500 text-sm">{ticket.date}</p>
      <p className="mt-2 text-gray-700 font-semibold">Rp {ticket.price}</p>
      <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Beli Tiket
      </button>
    </div>
  );
}
