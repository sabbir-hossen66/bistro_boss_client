import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider></Slider>
      <Banner></Banner>
    </div>
  );
};

export default Home;