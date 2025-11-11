import { useEffect } from 'react'
import './index.css'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'
import { initFlowbite } from 'flowbite'
import { Outlet } from 'react-router-dom'

function App() {

  useEffect(() => {
    initFlowbite();
  }, []);

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
