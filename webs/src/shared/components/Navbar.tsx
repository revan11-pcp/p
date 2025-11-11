import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState<'English' | 'Indonesian'>('English');

  const translations = {
    English: {
      home: 'Home',
      services: 'Services',
      traceAndTrack: 'Trace and Track',
      contact: 'Contact',
    },
    Indonesian: {
      home: 'Beranda',
      services: 'Layanan',
      traceAndTrack: 'Lacak dan Lacak',
      contact: 'Kontak',
    },
  };

  const flags = {
    English: (
      <svg
        className="w-5 h-5 rounded-full me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3900 3900"
      >
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path
          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
          stroke="#fff"
          strokeWidth="300"
        />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
        <g fill="#fff">
          <g id="d">
            <g id="c">
              <g id="e">
                <g id="b">
                  <path
                    id="a"
                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                  />
                  <use y="420" />
                  <use y="840" />
                  <use y="1260" />
                </g>
                <use y="1680" />
              </g>
              <use x="247" y="210" />
            </g>
            <use x="494" />
          </g>
          <use x="988" />
          <use x="1976" />
          <use x="2470" />
        </g>
      </svg>
    ),
    Indonesian: (
      <svg
        className="w-5 h-5 rounded-full me-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill="#ce1126" d="M0 0h512v256H0Z" />
        <path fill="#fff" d="M0 256h512v256H0Z" />
      </svg>
    ),
  };

  const handleLanguageChange = (lang: 'English' | 'Indonesian') => {
    setLanguage(lang);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
        </Link>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {flags[language]}
            {language}
          </button>

          <div
            id="language-dropdown-menu"
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <button
                  onClick={() => handleLanguageChange('English')}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 3900 3900"
                    >
                      <path fill="#b22234" d="M0 0h7410v3900H0z" />
                      <path
                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                        stroke="#fff"
                        strokeWidth="300"
                      />
                      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                    </svg>
                    English
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange('Indonesian')}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="h-3.5 w-3.5 rounded-full me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ce1126" d="M0 0h512v256H0Z" />
                      <path fill="#fff" d="M0 256h512v256H0Z" />
                    </svg>
                    Indonesian
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                {translations[language].home}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white"
              >
                {translations[language].services}
              </Link>
            </li>
            <li>
              <Link
                to="/trace-and-track"
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white"
              >
                {translations[language].traceAndTrack}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white"
              >
                {translations[language].contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
