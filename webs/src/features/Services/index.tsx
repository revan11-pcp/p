import ServicesSection from './components/ServicesSection'
import img from '../../assets/cs.png'
import HeroSection from '../../shared/components/HeroSection'

const index = () => {

  return (
    <>
    <HeroSection image={img} title='Services' height='h-[50vh]'/>
    <ServicesSection />
    </>
  )
}

export default index