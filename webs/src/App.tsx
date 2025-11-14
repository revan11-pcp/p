import { useEffect } from 'react'
import './index.css'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'
import { initFlowbite } from 'flowbite'
import { Outlet, useParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

function App() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    initFlowbite();
  }, []);

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Toaster position="bottom-center" reverseOrder={false} />
        </>
    )
}

export default App
