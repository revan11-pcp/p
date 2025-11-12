import logo from '../../assets/logo.png';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [language, setLanguage] = useState<'English' | 'Indonesian'>('English');
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.relative')) {
        setOpenDropdown('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      timeoutRef.current = window.setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(false);
        }
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll);

    timeoutRef.current = window.setTimeout(() => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const translations = {
    English: {
      home: 'HOME',
      services: 'SERVICES',
      TrackAndEstimate: 'TRACK & ESTIMATE',
      tracking: 'Track & Trace',
      pricing: 'Rate Calculator',
      coverage: 'Delivery Coverage',
      about: 'ABOUT US',
      companyProfile: 'Company Profile',
      career: 'Career',
      contact: 'CONTACT US',
    },
    Indonesian: {
      home: 'BERANDA',
      services: 'LAYANAN',
      TrackAndEstimate: 'CEK & HITUNG',
      tracking: 'Lacak Kiriman',
      pricing: 'Hitung Tarif',
      coverage: 'Wilayah Pengiriman',
      about: 'TENTANG KAMI',
      companyProfile: 'Profil Perusahaan',
      career: 'Karier',
      contact: 'KONTAK KAMI',
    },
  };





  return (
    <nav
      className={`bg-white shadow-md fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'top-0' : '-top-full'
      }`}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          if (window.scrollY > 0) {
            setIsVisible(false);
          }
        }, 5000);
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
        </Link>

        <div className="flex items-center md:order-2 space-x-2">
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-2 md:space-y-0 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {translations[language].home}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {translations[language].services}
              </NavLink>
            </li>

            <li
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setOpenDropdown('track');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = window.setTimeout(() => {
                  setOpenDropdown('');
                }, 200);
              }}
            >
              {(() => {
                const isDropdownActive =
                  location.pathname === '/trace-and-track' ||
                  location.pathname === '/pricing' ||
                  location.pathname === '/coverage';
                return (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'track' ? '' : 'track')}
                    className={`flex items-center py-2 px-3 md:p-0 ${
                      isDropdownActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 hover:text-blue-700 dark:text-white'
                    }`}
                  >
                    {translations[language].TrackAndEstimate}
                    <svg
                      className={`w-4 h-4 ml-1 mt-0.5 transform transition-transform ${
                        openDropdown === 'track' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                );
              })()}

              {openDropdown === 'track' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999]">
                  <li>
                    <NavLink
                      to="/trace-and-track"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {translations[language].tracking}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {translations[language].pricing}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/coverage"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {translations[language].coverage}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {translations[language].contact}
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setOpenDropdown('about');
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = window.setTimeout(() => {
                  setOpenDropdown('');
                }, 200);
              }}
            >
              {(() => {
                const isDropdownActive =
                  location.pathname === '/company-profile' || location.pathname === '/career';
                return (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'about' ? '' : 'about')}
                    className={`flex items-center py-2 px-3 md:p-0 ${
                      isDropdownActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 hover:text-blue-700 dark:text-white'
                    }`}
                  >
                    {translations[language].about}
                    <svg
                      className={`w-4 h-4 ml-1 mt-0.5 transform transition-transform ${
                        openDropdown === 'about' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                );
              })()}

              {openDropdown === 'about' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999]">
                  <li>
                    <NavLink
                      to="/company-profile"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {translations[language].companyProfile}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/career"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {translations[language].career}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
