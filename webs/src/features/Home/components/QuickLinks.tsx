import { Link } from "react-router-dom";
import { FaSearchLocation, FaCalculator, FaMapMarkedAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const QuickLinks = () => {
  const { t } = useTranslation();
  const links = [
    {
      to: "trace-and-track",
      icon: <FaSearchLocation className="h-12 w-12 mx-auto" />,
      text: t("tracking"),
    },
    {
      to: "pricing",
      icon: <FaCalculator className="h-12 w-12 mx-auto" />,
      text: t("pricing"),
    },
    {
      to: "coverage",
      icon: <FaMapMarkedAlt className="h-12 w-12 mx-auto" />,
      text: t("coverage"),
    },
  ];

  return (
    <div className="py-4">
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-center px-4 py-2 group transition-all duration-300 hover:text-blue-500 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white"
            >
              {link.icon}
              <h3>{link.text}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
