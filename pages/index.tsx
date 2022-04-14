import ArtSlider from "@/components/ArtSlider";
import Banner from "@/components/Banner";
import RoadMap from "@/components/Roadmap";
import Team from "@/components/Team";
import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <ArtSlider />
      <RoadMap />
      <Team />
    </Fragment>
  );
};

export default Home;
