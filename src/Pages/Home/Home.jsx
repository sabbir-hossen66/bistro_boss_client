import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider></Slider>
      <Banner></Banner>
      <Category></Category>
    </div>
  );
};

export default Home;