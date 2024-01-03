
import Banner from "../../Components/Banner/Banner";
import BooksCategory from "../../Components/BooksCategory/BooksCategory";
import Discover from "../../Components/Discover/Discover";

const Home = () => {
    return (
        <div>
          {/* banner area start */}
         <Banner/>
          {/* end of banner area */}
          {/* discover area */}
          <Discover/>
          {/* end of discover area */}

          {/* books category area */}
          <BooksCategory/>
          {/* end of books category area */}
        </div>
    );
};

export default Home;