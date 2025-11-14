import HeroSection from '../../shared/components/HeroSection'
import img from '../../assets/services.jpg'
import ContactForm from './components/ContactForm'
const index = () => {
  return (
    <div>
        <HeroSection image={img} title='Contact' height='h-[50vh]'/>
        <ContactForm/>
    </div>
  )
}

export default index