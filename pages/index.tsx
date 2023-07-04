import { Header } from "@sectionsPage/Header";
import { Footer } from "@sectionsPage/Footer";
import type { NextPage } from "next";
import { Main } from "@sectionsPage/Main";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
