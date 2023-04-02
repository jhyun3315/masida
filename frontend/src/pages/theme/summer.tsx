import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Summer from "../../components/Theme/Summer";
import ResetCategory from "../../components/UI/ResetCategory";

const summer = () => {
  ResetCategory();
  return (
    <>
      <Header />
      <Summer />
      <Footer />
    </>
  );
};

export default summer;
