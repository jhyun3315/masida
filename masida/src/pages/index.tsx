import { Inter } from "next/font/google";
import Main_banner from "@/components/Main/main_banner";
import Main_cocktail from "@/components/Main/Main_cocktail";
import Main_search from "@/components/Main/Main_search";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main_banner />
      <Main_cocktail />
      <Main_search />
      <Footer/>
    </>
  );
}
