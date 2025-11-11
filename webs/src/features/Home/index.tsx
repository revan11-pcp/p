import Tracing from "../../shared/components/Tracing";
import Blog from "./components/Blog";
import CarouselSection from "./components/CarouselSection";

const Home = () => {
    return (
        <div>
            <CarouselSection />
            <Tracing/>
            <Blog/>
        </div>
    );
};

export default Home;
