import { FaCalendarAlt, FaTruck, FaClock, FaHeadset } from "react-icons/fa";


const features = [
  {
    icon: <FaCalendarAlt className="text-gray-900 dark:text-white text-4xl mb-3" />,
    title: "365 DAYS",
    description: "Operational 24/7",
  },
  {
    icon: <FaTruck className="text-gray-900 dark:text-white text-4xl mb-3" />,
    title: "Dedicated Fleet",
    description: "Berbagai jenis armada untuk kebutuhan Anda",
  },
  {
    icon: <FaClock className="text-gray-900 dark:text-white text-4xl mb-3" />,
    title: "Real-Time Tracking",
    description: "Lacak kiriman Anda kapan saja",
  },
  {
    icon: <FaHeadset className="text-gray-900 dark:text-white text-4xl mb-3" />,
    title: "24-Hour Support",
    description: "Layanan pelanggan siap membantu",
  },
];

const Feature = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-16"> 
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12"> 
          PCP Transport’s Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center text-center" 
            >
              {item.icon}
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-900 dark:text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;