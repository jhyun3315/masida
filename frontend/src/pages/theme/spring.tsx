import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Spring from "../../components/Theme/Spring";
import ResetCategory from "../../components/UI/ResetCategory";

const spring = () => {
  ResetCategory();
  return (
    <>
      <Header />
      <Spring />
      <Footer />
    </>
  );
};

export default spring;
