import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import type { NextPage } from "next";
import { Main } from "@components/Main";

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
