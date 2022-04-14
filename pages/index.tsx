import ArtSlider from "@/components/ArtSlider";
import Banner from "@/components/Banner";
import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <ArtSlider />
    </Fragment>
  );
};

export default Home;
