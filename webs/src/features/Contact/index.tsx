import HeroSection from '../../shared/components/HeroSection'
import img from '../../assets/cs.png'
import ContactForm from './components/ContactForm'
const index = () => {
  return (
    <div>
        <HeroSection image={img} title='Contact' height='h-[50-vh]'/>
        <ContactForm/>
    </div>
  )
}

export default index