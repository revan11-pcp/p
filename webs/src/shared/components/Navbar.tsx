import logo from '../../assets/logo.png';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher'; // Import ThemeSwitcher
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <nav
      className={`bg-white dark:bg-gray-900 shadow-md fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
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
        <Link to={`/${i18n.language}`} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 dark:invert" alt="Logo" />
        </Link>

        <div className="flex items-center md:order-2 space-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher /> {/* Add ThemeSwitcher here */}
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-language"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-2 md:space-y-0 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            
            <li>
              <NavLink
                to={`/${i18n.language}`}
                end
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {t('home')}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {t('services')}
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
                  location.pathname.endsWith('/trace-and-track') ||
                  location.pathname.endsWith('/pricing') ||
                  location.pathname.endsWith('/coverage');
                return (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'track' ? '' : 'track')}
                    className={`flex items-center py-2 px-3 md:p-0 ${
                      isDropdownActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 hover:text-blue-700 dark:text-white'
                    }`}
                  >
                    {t('TrackAndEstimate')}
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
                      to="trace-and-track"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {t('tracking')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="pricing"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {t('pricing')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="coverage"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {t('coverage')}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-white'
                  }`
                }
              >
                {t('contact')}
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
                  location.pathname.endsWith('/company-profile') || location.pathname.endsWith('/career');
                return (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'about' ? '' : 'about')}
                    className={`flex items-center py-2 px-3 md:p-0 ${
                      isDropdownActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 hover:text-blue-700 dark:text-white'
                    }`}
                  >
                    {t('about')}
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
                      to="company-profile"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {t('companyProfile')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="career"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'text-blue-700 dark:text-blue-500'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {t('career')}
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
