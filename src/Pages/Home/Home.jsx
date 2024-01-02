
import Banner from "../../Components/Banner/Banner";
import BooksCategory from "../../Components/BooksCategory/BooksCategory";

const Home = () => {
    return (
        <div>
          {/* banner area start */}
         <Banner/>
          {/* end of banner area */}

          {/* books category area */}
          <BooksCategory/>
          {/* end of books category area */}
        </div>
    );
};

export default Home;