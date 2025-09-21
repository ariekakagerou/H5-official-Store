import TicketCard from "@/components/TicketCard";

export default function TicketPage() {
  const tickets = [
    { event: "Teater Malam Sabtu", date: "21 Sep 2025", price: "75000" },
    { event: "Konser Spesial Idol", date: "5 Okt 2025", price: "150000" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tiket</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map((t, i) => (
          <TicketCard key={i} ticket={t} />
        ))}
      </div>
    </div>
  );
}
