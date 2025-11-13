import { Link } from "react-router-dom";
import { FaSearchLocation, FaCalculator, FaMapMarkedAlt } from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      to: "/trace-and-track",
      icon: <FaSearchLocation className="h-12 w-12 mx-auto text-blue-600" />,
      text: "Trace & Track",
    },
    {
      to: "/pricing",
      icon: <FaCalculator className="h-12 w-12 mx-auto text-blue-600" />,
      text: "Rate Calculator",
    },
    {
      to: "/coverage",
      icon: <FaMapMarkedAlt className="h-12 w-12 mx-auto text-blue-600" />,
      text: "Delivery Coverage",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-center px-4 py-2"
            >
              {link.icon}
              <h3 className="text-xl font-semibold text-gray-800">{link.text}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
