import React from "react";
import MainLayout from "../layouts/MainLayout";
/*Sections*/
import List from "../components/Sections/List/List";
import StickyHero from "../components/Sections/StickyHero/StickyHero";
import Text from "../components/Sections/Text/Text";
import Hero from "../components/Sections/Hero/Hero";
import HeroText from "../components/Sections/HeroText/HeroText";
import BlogHome from "../components/Sections/BlogHome/BlogHome";

const IndexPage = () => {
 
  return (
    <MainLayout>
      <Hero />
      <HeroText />
      <BlogHome />
      <List />
      <StickyHero />
      <Text />
    </MainLayout>

  )
}

export default IndexPage
