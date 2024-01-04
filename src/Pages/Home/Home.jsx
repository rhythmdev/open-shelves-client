
import Banner from "../../Components/Banner/Banner";
import BooksCategory from "../../Components/BooksCategory/BooksCategory";
import Discover from "../../Components/Discover/Discover";
import ManageLibrary from "../../Components/ManageLibrary/ManageLibrary";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

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

      {/* newsletter area */}
      <NewsLetter/>
      {/* end of newsletter area */}
    </div>
  );
};

export default Home;