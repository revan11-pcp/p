import Blog from "./components/Blog";
import Feature from "./components/Feature";
import HomeHeroSection from "./components/HomeHeroSection";

const Home = () => {
    return (
        <div>
            <HomeHeroSection />
            <Feature/>
            <Blog/>
        </div>
    );
};

export default Home;
