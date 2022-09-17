import React from "react";
import Arrow from "../components/Arrow";
import BlogSction from "../components/BlogSction";
import Body from "../components/Body";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import ReleasedGames from "../components/ReleasedGames";
import Services from "../components/Services";
import TopHeader from "../components/TopHeader";
const HomeScreen = () => {
  return (
    <>
      <Arrow />
      <TopHeader />
      <Body />
      <Services />
      <ReleasedGames />
      <BlogSction />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomeScreen;
