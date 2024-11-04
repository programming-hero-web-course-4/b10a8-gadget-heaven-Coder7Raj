import { Outlet } from "react-router-dom";
import HomeBanner from "../../Banner/HomeBanner";
import ProductButton from "../../ProductButton/ProductButton";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="flex gap-4 container mx-auto">
        <div>
          <ProductButton />
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
