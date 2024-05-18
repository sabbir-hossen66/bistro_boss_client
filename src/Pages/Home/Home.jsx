import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider></Slider>
      <Banner></Banner>
      <PopularMenu></PopularMenu>
      <Category></Category>

    </div>
  );
};

export default Home;