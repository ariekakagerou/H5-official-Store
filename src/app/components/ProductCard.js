export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">Rp {product.price}</p>
      <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Beli
      </button>
    </div>
  );
}
