
interface LanguageSwitcherProps {
  currentLanguage: 'English' | 'Indonesian';
  onLanguageChange: (lang: 'English' | 'Indonesian') => void;
}

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
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

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'English' ? 'Indonesian' : 'English';
    onLanguageChange(newLanguage);
  };

  return (
    <button
      type="button"
      onClick={handleLanguageChange}
      className="inline-flex items-center px-3 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
    >
      {flags[currentLanguage]}
      {currentLanguage}
    </button>
  );
};

export default LanguageSwitcher;
