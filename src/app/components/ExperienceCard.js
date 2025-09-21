export default function ExperienceCard({ experience }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 text-lg font-bold">{experience.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{experience.description}</p>
      <button className="w-full mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Join Now
      </button>
    </div>
  );
}
