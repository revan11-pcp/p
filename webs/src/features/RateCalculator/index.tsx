import HeroSection from "../../shared/components/HeroSection"
import port from '../../assets/pelabuhan.jpeg'
import FormRatesCalculator from "./components/FormRatesCalculator"

const index = () => {
  return (
    <div>
        <HeroSection image={port} title="Rate Calculator" height="h-[50vh]"/>
        <div className="py-10">
          <FormRatesCalculator/>
        </div>
    </div>
  )
}

export default index