import HeroSection from '../../shared/components/HeroSection'
import img from '../../assets/cs.png'
import Tracing from '../../shared/components/Tracing'

const index = () => {
  return (
    <div>
        <HeroSection image={img} title='Trace & Track' height='h-[50vh]'/>
        <Tracing/>
    </div>
  )
}

export default index