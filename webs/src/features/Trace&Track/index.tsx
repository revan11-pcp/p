import HeroSection from '../../shared/components/HeroSection'
import Tracing from '../../shared/components/Tracing'
import { useSearchParams } from 'react-router-dom';
import img from '../../assets/truck.jpg'

const Index = () => {
  const [searchParams] = useSearchParams();
  const trackingId = searchParams.get('trackingId') || '';

  return (
    <div>
        <HeroSection image={img} title='Trace & Track' height='h-[50vh]'/>
        <Tracing initialTrackingId={trackingId} />
    </div>
  )
}

export default Index;