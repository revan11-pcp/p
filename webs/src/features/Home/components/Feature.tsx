import { FaTruck, FaRoute, FaChartLine, FaWarehouse } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-600 text-4xl mb-3" />,
    title: "Transportation Management System (TMS)",
    description:
      "Sistem digital terpadu untuk mengelola armada, rute, dan pengiriman secara efisien, membantu meningkatkan kecepatan dan akurasi distribusi.",
  },
  {
    icon: <FaRoute className="text-blue-600 text-4xl mb-3" />,
    title: "Real-Time Tracking",
    description:
      "Pantau posisi dan status pengiriman secara langsung untuk memastikan transparansi dan kepercayaan pelanggan.",
  },
  {
    icon: <FaWarehouse className="text-blue-600 text-4xl mb-3" />,
    title: "Warehouse Integration",
    description:
      "Terhubung langsung dengan sistem pergudangan untuk memudahkan manajemen stok dan distribusi barang.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-4xl mb-3" />,
    title: "Analytics & Reporting",
    description:
      "Dapatkan laporan operasional yang detail untuk membantu pengambilan keputusan berbasis data.",
  },
];

const Feature = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          PCP Transport’s Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
