
import Banner from "../../Components/Banner/Banner";
import BooksCategory from "../../Components/BooksCategory/BooksCategory";
import Discover from "../../Components/Discover/Discover";
import ManageLibrary from "../../Components/ManageLibrary/ManageLibrary";

const Home = () => {
  return (
    <div>
      {/* banner area start */}
      <Banner />
      {/* end of banner area */}

      {/* manage library area */}
      <ManageLibrary />
      {/* end of manage library area */}

      {/* books category area */}
      <BooksCategory />
      {/* end of books category area */}

      {/* discover area */}
      <Discover />
      {/* end of discover area */}
    </div>
  );
};

export default Home;