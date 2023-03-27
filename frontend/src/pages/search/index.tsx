import Header from "../../components/Header/Header";
import SearchPage from "../../components/Search/SearchPage";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const search = () => {
  return (
    <>
      <Header />
      <SearchPage />
    </>
  );
};

export default search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  
  const req = context.req;
  const res = context.res;
  let selectBase:string = "";
  if(useSelector((state : RootState) => state.baseSelect)) {
    // selectBase = useSelector((state : RootState) => state.baseSelect);
  }
  useSelector((state : RootState) => state.baseSelect);
  let selectIngredient = useSelector(
    (state: RootState) => state.ingredientSelect
  );
  let selectColor = useSelector((state : RootState) => state.colorSelect);
  let selectDifficulty = useSelector((state : RootState) => state.difficultySelect);
  let selectName = useSelector((state : RootState) => state.nameSelect.searchName, );
  
  try {
    const response = await axios.post(
      `https://j8b208.p.ssafy.io/api/cocktails/search`,
      {
          body: {
            
          }
      }
    );
    const data = response.data.data;
    console.log("call : ", data);
    return {
      props: {
        detail: data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
