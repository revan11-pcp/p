import Blog from "./components/Blog";
import CarouselSection from "./components/CarouselSection";
import Feature from "./components/Feature";
import QuickLinks from "./components/QuickLinks";

const Home = () => {
    return (
        <div>
            <CarouselSection />
            <QuickLinks />
            <Feature/>
            <Blog/>
        </div>
    );
};

export default Home;
