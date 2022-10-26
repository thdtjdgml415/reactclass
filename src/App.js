import React from "react";
import Main from "./components/Layout/Main";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Text from "./components/section/Text";
import Banner from "./components/section/Banner";
import Slider from "./components/section/Slider";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider attr={["section", "nexon"]} />
        <Image attr={["section", "nexon", "position", "container"]} />
        <ImageText attr={["nexon", "section", "position", "container"]} />
        <Card attr={["section", "nexon", "position", "container"]} />
        <Banner attr={["nexon", "section", "position"]} />
        <Text attr={["nexon", "section", "positon", "container"]} />
      </Main>
      <Footer attr={["container"]} />
    </>
  );
}

export default App;
