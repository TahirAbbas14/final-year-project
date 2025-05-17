import HeroSectionHomePage from "@/components/HeroSectionHomePage";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomePageStyled>
      <NavigationBar />
      <HeroSectionHomePage />
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div``;
