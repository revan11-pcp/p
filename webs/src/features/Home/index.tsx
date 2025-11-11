import Tracing from "../../shared/components/Tracing";
import Blog from "./components/Blog";
import CarouselSection from "./components/CarouselSection";
import Feature from "./components/Feature";

const Home = () => {
    return (
        <div>
            <CarouselSection />
            <Tracing/>
            <Feature/>
            <Blog/>
        </div>
    );
};

export default Home;
