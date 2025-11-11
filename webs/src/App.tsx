import './index.css'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'
import Home from './features/Home'
import Services from './features/Services'

function App() {

    return (
        <>
            <Navbar/>
            <Home/>
            {/* <Services/> */}
            <Footer/>
        </>
    )
}

export default App
