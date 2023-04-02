import Header from "../../components/Header/Header";
import Begginer from "../../components/Theme/Begginer";
import Footer from "../../components/Footer/Footer";
import ResetCategory from "../../components/UI/ResetCategory";

const begginer = () => {
  ResetCategory();
  return (
    <>
      <Header />
      <Begginer />
      <Footer />
    </>
  );
};

export default begginer;
