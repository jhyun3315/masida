import Header from "../../components/Header/Header";
import Statistics from "../../components/Theme/Statistics";
import Footer from "../../components/Footer/Footer";
import ResetCategory from "../../components/UI/ResetCategory";

const statistics = () => {
  ResetCategory();
  return (
    <>
      <Header />
      <Statistics />
      <Footer />
    </>
  );
};

export default statistics;
